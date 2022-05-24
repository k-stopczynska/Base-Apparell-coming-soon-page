//selectors
const email = document.querySelector('.email-form');
const form = document.querySelector('.form');
const error = document.querySelector('.error');
const exclamation = document.querySelector('.exclamation');

//eventListeners
form.addEventListener('submit', (e) => {
    let message = [];
    let emailString = email.value;
    let regex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    function validate(emailString) {
       return regex.test(String(emailString).toLowerCase());
    }
    if (email.value === '' || email.value === null || !validate(emailString)) {
    message.push('Please provide a valid email');
    exclamation.style.opacity = "1";
    form.style.border = "1px solid red";
    }
    
    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(', ');
    }
});