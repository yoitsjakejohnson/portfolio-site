const name = document.getElementById('name');
const email = document.getElementById('email');
const textMessage = document.getElementById('message');
const contactForm = document.getElementById('contact_form');
const errorMessage = document.getElementById('error');

contactForm.addEventListener('submit', e => {

    e.preventDefault();

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    let isError = false;

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
        isError = true;
    } else {
        setSuccessFor(name);
        isError = false;
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        isError = true;
    } else if (!isEmail(emailValue)) {
        isError = true;
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
        isError = false;
    }

    if (textMessage.value === '') {
        setErrorFor(textMessage, 'Message cannot be blank');
        isError = true;
    } else {
        setSuccessFor(textMessage);
        isError = false;
    }

    function setErrorFor(input, message) {
        const userBox = input.parentElement;
        const small = userBox.querySelector('small');
        userBox.classList.add('error');
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const userBox = input.parentElement;
        userBox.classList.remove('error');
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (isError === false) {
        e.currentTarget.submit();
    }
});