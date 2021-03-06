import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "email" ]

    validateEmail() {
        if (!this.emailTarget.validity.valid || this.emailTarget.value === ''){
            return false;
        }
        return true;
    }

    submitForm(e){
        if (this.validateEmail()){
            return;
        }
        e.preventDefault();

    }
}
