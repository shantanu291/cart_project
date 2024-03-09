// alert("please provide your details");

let buttonElement = document.getElementById("submit");

buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    let user_email = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    let data = localStorage.getItem("userData");
    let email_error_displayer = document.getElementById("email_error_displayer");
    let pass_verifier = document.getElementById("pass_verifier");

    let parsedData = JSON.parse(data)
    console.log(parsedData);

    if (parsedData[0].userName != user_email) {
        email_error_displayer.style.display = "block";
    }
    if (parsedData[0].password != userPassword) {
        pass_verifier.style.display = "block";

    }
    if (parsedData[0].userName === user_email) {
        email_error_displayer.style.display = "none";
        
        if (parsedData[0].password === userPassword) {
            // console.log("none");
            pass_verifier.style.display = "block";
            alert("you have successfully logged in ");
            location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";

        }
    }


})
