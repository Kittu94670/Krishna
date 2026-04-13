import { LightningElement, wire, track } from 'lwc';
import getMembers from '@salesforce/apex/GymAttendanceController.getMembers';
import getTodayAttendance from '@salesforce/apex/GymAttendanceController.getTodayAttendance';
import checkIn from '@salesforce/apex/GymAttendanceController.checkIn';
import checkOut from '@salesforce/apex/GymAttendanceController.checkOut';

export default class GymAttendanceTracker extends LightningElement {

    @track memberOptions = [];
    @track attendance;
    memberId;

    columns = [
        { label: 'Member', fieldName: 'memberName' },
        { label: 'Check In', fieldName: 'Check_In__c' },
        { label: 'Check Out', fieldName: 'Check_Out__c' }
    ];

    // 🔹 MEMBERS FETCH
    @wire(getMembers)
    wiredMembers(response) {
        console.log('🔥 wiredMembers FULL response:', JSON.stringify(response));

        const { data, error } = response;

        if (data) {
            console.log('✅ Members data received:', JSON.stringify(data));

            this.memberOptions = data.map(m => {
                console.log('👉 Mapping member:', m);
                return {
                    label: m.Name,
                    value: m.Id
                };
            });

            console.log('🎯 memberOptions:', JSON.stringify(this.memberOptions));

            // 👉 Breakpoint here
            debugger;
        }

        if (error) {
            console.error('❌ Error in getMembers:', error);
        }
    }

    // 🔹 ATTENDANCE FETCH
    @wire(getTodayAttendance)
    wiredAttendance(response) {
        console.log('🔥 wiredAttendance FULL response:', JSON.stringify(response));

        const { data, error } = response;

        if (data) {
            console.log('✅ Attendance data received:', JSON.stringify(data));

            this.attendance = data.map(row => {
                console.log('👉 Mapping attendance row:', row);

                return {
                    ...row,
                    memberName: row.Member__r?.Name
                };
            });

            console.log('🎯 Final attendance:', JSON.stringify(this.attendance));

            // 👉 Breakpoint here
            debugger;
        }

        if (error) {
            console.error('❌ Error in getTodayAttendance:', error);
        }
    }

    // 🔹 DROPDOWN CHANGE
    handleChange(event) {
        console.log('🟡 handleChange triggered');

        this.memberId = event.detail.value;

        console.log('🎯 Selected memberId:', this.memberId);

        // 👉 Breakpoint here
        debugger;
    }

    // 🔹 CHECK IN
    handleCheckIn() {
        console.log('🟢 Check-In clicked');
        console.log('📌 MemberId:', this.memberId);

        checkIn({ memberId: this.memberId })
            .then(result => {
                console.log('✅ Check-In success:', result);

                // 👉 Breakpoint after success
                debugger;
            })
            .catch(error => {
                console.error('❌ Check-In error:', error);
            });
    }

    // 🔹 CHECK OUT
    handleCheckOut() {
        console.log('🔵 Check-Out clicked');
        console.log('📌 MemberId:', this.memberId);

        checkOut({ memberId: this.memberId })
            .then(result => {
                console.log('✅ Check-Out success:', result);

                // 👉 Breakpoint after success
                debugger;
            })
            .catch(error => {
                console.error('❌ Check-Out error:', error);
            });
    }
}