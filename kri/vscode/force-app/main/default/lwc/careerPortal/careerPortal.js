import { LightningElement, track } from 'lwc';
import getJobs from '@salesforce/apex/JobController.getJobs';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveCandidate from '@salesforce/apex/JobController.saveCandidate';
import uploadResume from '@salesforce/apex/JobController.uploadResume';

export default class CareerPortal extends LightningElement {
    @track jobs = [];
    @track paginatedJobs = [];
    @track filteredJobs = [];
    @track locations = [];
    @track selectedLocation = '';
    @track searchKey = '';
    @track selectedJob = {};
    @track isJobModalOpen = false;
    @track isCandidateFormOpen = false;

    @track candidateData = {
        REC_Name__c: '',
        REC_Email__c: '',
        Phone__c: '',
        Address__c: '',
        PAN_Number__c: '',
        Experience__c: '',
        Skills__c: ''
    };

    resumeFile = null;
    identityFile = null;
    resumeFileName = '';
    identityFileName = '';

    pageSize = 12;
    @track currentPage = 1;
    @track totalPages = 1;

    connectedCallback() {
        this.loadJobs();
    }

    /* ---------- Load Jobs ---------- */
    async loadJobs() {
        try {
            const result = await getJobs({ searchKey: '' });
            this.jobs = result || [];
            this.filteredJobs = [...this.jobs];

            const locSet = new Set(this.jobs.map(job => job.Location__c).filter(loc => loc));
            this.locations = [
                { label: 'All Locations', value: '' },
                ...Array.from(locSet).sort().map(loc => ({ label: loc, value: loc }))
            ];

            this.updatePagination();
        } catch (error) {
            console.error(error);
            this.showToast('Error', 'Failed to load jobs', 'error');
        }
    }

    /* ---------- Filtering ---------- */
    handleSearchKeyChange(event) {
        this.searchKey = event.target.value || '';
        this.filterJobs();
    }

    handleLocationChange(event) {
        this.selectedLocation = event.detail.value;
        this.filterJobs();
    }

    filterJobs() {
        let filtered = [...this.jobs];

        if (this.searchKey) {
            const key = this.searchKey.toLowerCase();
            filtered = filtered.filter(job =>
                job.Job_Title__c?.toLowerCase().includes(key) ||
                job.Department__c?.toLowerCase().includes(key)
            );
        }

        if (this.selectedLocation) {
            filtered = filtered.filter(job => job.Location__c === this.selectedLocation);
        }

        this.filteredJobs = filtered;
        this.totalPages = Math.ceil(this.filteredJobs.length / this.pageSize) || 1;
        this.currentPage = 1;
        this.updatePagination();
    }

    updatePagination() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.paginatedJobs = this.filteredJobs.slice(start, end);
    }

    get isFirstPage() {
        return this.currentPage <= 1;
    }

    get isLastPage() {
        return this.currentPage >= this.totalPages;
    }

    get showNoJobsMessage() {
        return (this.searchKey || this.selectedLocation) && this.filteredJobs.length === 0;
    }

    handleNext() {
        if (!this.isLastPage) {
            this.currentPage++;
            this.updatePagination();
        }
    }

    handlePrevious() {
        if (!this.isFirstPage) {
            this.currentPage--;
            this.updatePagination();
        }
    }

    handleSearch() {
        this.filterJobs();
    }

    /* ---------- Job Modal ---------- */
    handleJobClick(event) {
        const el = event.target.closest('[data-id]');
        if (!el) return;
        const jobId = el.dataset.id;
        this.selectedJob = this.jobs.find(j => j.Id === jobId) || {};
        this.isJobModalOpen = true;
    }

    closeJobModal() {
        this.isJobModalOpen = false;
    }

    /* ---------- Candidate Form ---------- */
    openCandidateForm() {
        this.isJobModalOpen = false;
        this.isCandidateFormOpen = true;
        this.candidateData = {
            REC_Name__c: '',
            REC_Email__c: '',
            Phone__c: '',
            Address__c: '',
            PAN_Number__c: '',
            Experience__c: '',
            Skills__c: ''
        };
        this.resumeFile = null;
        this.identityFile = null;
        this.resumeFileName = '';
        this.identityFileName = '';
    }

    closeCandidateForm() {
        this.isCandidateFormOpen = false;
    }

    handleInputChange(event) {
        const field = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.candidateData = { ...this.candidateData, [field]: value };
    }

    handleFileChange(event) {
        const field = event.target.name;
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        if (field === 'resumeFile') {
            this.resumeFile = file;
            this.resumeFileName = file.name;
        } else if (field === 'identityFile') {
            this.identityFile = file;
            this.identityFileName = file.name;
        }
    }

    readFileAsBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }

    async uploadFileToServer(file, candidateId) {
        const base64 = await this.readFileAsBase64(file);
        return uploadResume({ candidateId, fileName: file.name, base64Data: base64 });
    }

    /* ---------- Submit ---------- */
    async handleSubmit() {
        if (!this.candidateData.REC_Name__c || !this.candidateData.REC_Email__c) {
            this.showToast('Error', 'Please provide Name and Email', 'error');
            return;
        }
        if (!this.resumeFile) {
            this.showToast('Error', 'Please upload resume', 'error');
            return;
        }
        if (!this.identityFile) {
            this.showToast('Error', 'Please upload identity proof', 'error');
            return;
        }

        try {
            // Auto mark checkbox as TRUE when both files uploaded
            const cand = { 
                ...this.candidateData, 
                Job__c: this.selectedJob.Id, 
                Have_You_Uploaded_All_FIles__c: true 
            };

            const candId = await saveCandidate({ cand });

            await this.uploadFileToServer(this.resumeFile, candId);
            await this.uploadFileToServer(this.identityFile, candId);

            this.showToast('Success', 'Application submitted successfully!', 'success');
            this.closeCandidateForm();
        } catch (err) {
            console.error(err);
            this.showToast('Error', 'Failed to submit application', 'error');
        }
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}