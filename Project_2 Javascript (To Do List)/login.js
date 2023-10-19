import { userAccounts } from "./data/userAccount.js";

// Selector
const userLogin = () => {
    const usernameInput = document.querySelector("#username").value;
    const passwordInput = document.querySelector("#password").value;

    const user = userAccounts.find(
        (user) =>
            user.username == usernameInput && user.password == passwordInput
    );

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        alert("Username dan password Tidak Sesuai");
    }
};

const loginBtn = document.querySelector(".button__login");
loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    userLogin();
});
