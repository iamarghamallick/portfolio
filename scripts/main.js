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
const CONTACT_BACKEND_HOST = "http://localhost:3000";

let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let alertMessage = document.getElementById('alert-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

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
            // show success message
            alertMessage.innerText = "Message sent Successfully!";
            setTimeout(() => {
                alertMessage.innerText = "";
            }, 5000);
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        } else {
            // alert('Something went wrong!');
            // show error message
            alertMessage.innerText = "Failed to send the message!";
            setTimeout(() => {
                alertMessage.innerText = "";
            }, 5000);
        }
    }

    xhr.send(JSON.stringify(formData));
})