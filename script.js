const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');
const signUpInputs = signUpForm.querySelectorAll('input');
const signInInputs = signInForm.querySelectorAll('input');
const signUpButton = signUpForm.querySelector('button');
const signInButton = signInForm.querySelector('button');

// Switch between forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Validate form inputs
const validateForm = (inputs) => {
    let isValid = true;
    inputs.forEach(input => {
        if (input.type !== 'checkbox' && input.value.trim() === '') {
            isValid = false;
            input.classList.add('error'); // Add an error class for styling
        } else {
            input.classList.remove('error'); // Remove error class if input is valid
        }
    });
    return isValid;
};

// Handle form validation and button enable/disable
const handleFormValidation = (form, inputs, button) => {
    form.addEventListener('input', () => {
        if (validateForm(inputs)) {
            button.disabled = false; // Enable button if form is valid
        } else {
            button.disabled = true; // Disable button if form is invalid
        }
    });
};

// Apply form validation logic to both forms
handleFormValidation(signUpForm, signUpInputs, signUpButton);
handleFormValidation(signInForm, signInInputs, signInButton);

// Submit event for both forms
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(signUpInputs)) {
        alert('Your Account is successfully Created! & Website is Under Construction');
        // Additional functionality, such as form submission via API or server, goes here
    }
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(signInInputs)) {
        alert('Logged in successfully! & Website is Under Construction');
        // Handle login (e.g., authenticate via API)
    }
});
