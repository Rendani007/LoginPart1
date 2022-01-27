//if you are authenticated, good but if not, it will kick you out
class Auth{
    //creating a validation script
    constructor() {
        //preventing url inserts to enter the dashboard
        document.querySelector("body").style.display = "none";

        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        if (auth != 1) {
            window.location.replace("/");
        } else {
            document.querySelector("body").style.display = "block";
        }
    }

    logOut() {
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}
