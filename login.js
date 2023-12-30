function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Simple validation
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter both email and password.");
        return;
    }

    // Simulating a server response (replace with your actual validation logic)
    alert("Login successful!");

    // Redirect to the desired location after successful login
    window.location.href = "file:///C:/Users/Dino/Downloads/Profile%20Template/Profile%20Template/pro.html#account-general";
}

function redirectToSignup() {
    // Redirect to the registration page
    window.location.href = "file:///E:/MsOffice%20L/Project%20web%20pr/webbb/register.html";
}
