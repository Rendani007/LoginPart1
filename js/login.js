//creating a class with functions called from the init.js
class Login{
    constructor(form, fields) { 
        this.form = form;
        this.fields = fields;
        this.validationSubmit();
    }
    // when there is a submit, this function will run
    validationSubmit() {
        let self = this;
        
        this.form.addEventListener("submit", (e) => {
            var error = 0;
            e.preventDefault();

            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input)==false) {
                    error++;
                }
               
            });
             if (error == 0) {
                    //takes you to dashboard
                    //pass username and password to api script and get tokens
                    //login api info 
                    //local storage
                    localStorage.setItem("auth", 1)
                    this.form.submit();
                }
        });
    }



    //Creating a function for validation and I am are passing the fields 
    validateFields(field) {
        if (field.value.trim() == "") {
            //status function to pass message if inputs are blank
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        }
        //status function to pass message if inputs not blank
        //and has to meet certain variables
        else {
            if (field.type == "password") {
                //has to meet certain variables
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 characters`,
                        "error"
                    );
                    return false;
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                this.setStatus(field, null, "success");
                return true;
        }
            
        }
    }


    //function
    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }

        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }

}
// creating variable for form
const form = document.querySelector(".loginForm");
if (form) {
    const fields = ["username", "password"];
    const validator = new Login(form, fields);
}