// change navbar color on scroll
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

// download cv
const downloadCv = () => {
    alert('Currently unavailable! Please try later.')
}

// contact form submission
// const CONTACT_BACKEND_HOST = "http://localhost:3000";
const CONTACT_BACKEND_HOST = "https://contact-form-backend-ruwn.onrender.com";

let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let alertMessage = document.getElementById('alert-message');
let submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // start loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <div class="spinner-border text-light" role = "status" style = "width: 1rem; height: 1rem; margin: 0 13.71px;">
            <span class="visually-hidden">Loading...</span>
        </div>`

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', `${CONTACT_BACKEND_HOST}/sendemail`);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            // alert('Message sent');
            // show success message and stop loading
            submitBtn.innerHTML = "Success!"
            setTimeout(() => {
                submitBtn.innerHTML = "Send"
                submitBtn.disabled = false;
            }, 5000);
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        } else {
            // alert('Something went wrong!');
            // show error message and stop loading
            submitBtn.innerHTML = "Failed!"
            setTimeout(() => {
                submitBtn.innerHTML = "Send"
                submitBtn.disabled = false;
            }, 5000);
        }
    }

    xhr.send(JSON.stringify(formData));
})