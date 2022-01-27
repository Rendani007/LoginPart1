//this is where i call the functions

const auth = new auth();

//for logout
document.querySelector(".logout").addEventListener("click", (e) => {
    auth.logOut();
});