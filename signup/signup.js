let buttonElement = document.getElementById("submit")

let user = [];
buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    if (password === confirm) {
        let obj = {
            userName: username,
            password: password
        }
        // push the obj containing userData into the array
        user.push(obj)
        // console.log(user);
        localStorage.setItem("userData", JSON.stringify(user));
        alert("you have successfully registered ");
       window.location.href = "http://127.0.0.1:5500/login/login.html"
    }
     else if(password!=confirm) {
        alert("confirm password doesn't match");
    }

})
