function validateForm() {
    let valid = true;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");
    if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "Letters only.";
        valid = false;
    }
    if (!namePattern.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Letters only.";
        valid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email.";
        valid = false;
    }
    if (password.length < 7) {
        document.getElementById("passwordError").innerHTML = "Minimum 8 characters.";
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        valid = false;
    }
    if (valid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
    return valid;
}
