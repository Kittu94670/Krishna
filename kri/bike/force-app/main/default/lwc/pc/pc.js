import { LightningElement } from 'lwc';


export default class Pc extends LightningElement {

    handleClick() {

        console.log('🔥 Step 1: Button clicked in Parent');

        const childComp = this.template.querySelector('c-cc');

        console.log('👉 Step 2: Child component reference:', childComp);

        if (childComp) {
            console.log('✅ Step 3: Calling child method...');
            childComp.showAlert('Hello from Parent');
        } else {
            console.error('❌ Child component not found!');
        }

        console.log('🏁 Step 4: handleClick finished');
    }
}