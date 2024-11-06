function validateForm() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var tickets = document.getElementById('tickets').value;

    // Validate name and surname (should not be empty)
    if (name === "" || surname === "") {
        alert("Name and Surname are mandatory fields.");
        return false;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert("Invalid email format.");
        return false;
    }

    // Validate contact number (should be 10 digits)
    if (!isValidContact(contact)) {
        alert("Contact number should be 10 digits.");
        return false;
    }

    // Validate number of tickets (should be >0 and <10)
    if (tickets <= 0 || tickets >= 10) {
        alert("Number of tickets should be between 1 and 9.");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isValidContact(contact) {
    return /^\d{10}$/.test(contact);
}


document.addEventListener("DOMContentLoaded", function() {
    const showSigninButton = document.getElementById("show-signin");
    const showSignupButton = document.getElementById("show-signup");
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const signupLink = document.getElementById("signup-link");
    const signinLink = document.getElementById("signin-link");

    showSigninButton.addEventListener("click", function() {
        showForm(signinForm);
        hideForm(signupForm);
    });

    showSignupButton.addEventListener("click", function() {
        showForm(signupForm);
        hideForm(signinForm);
    });

    signupLink.addEventListener("click", function() {
        showForm(signupForm);
        hideForm(signinForm);
    });

    signinLink.addEventListener("click", function() {
        showForm(signinForm);
        hideForm(signupForm);
    });
});

function showForm(form) {
    form.style.display = "block";
}

function hideForm(form) {
    form.style.display = "none";
}

function validateForm() {
    var form = document.querySelector('.booking-form');
    if (form.checkValidity()) {
        window.location.href = 'cart.html'; // Redirects to cart.html if form is valid
        return false; // Prevents the default form submission
    } else {
        form.reportValidity(); // Triggers the browser's built-in form validation messages
        return false; // Prevents the default form submission
    }
}
