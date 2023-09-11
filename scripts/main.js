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
let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let alertMessage = document.getElementById('alert-message');
let submitBtn = document.getElementById('submit-btn');

const scriptURL = 'https://script.google.com/macros/s/AKfycbz76MOBpIyjlYtwDP8KJk3YMqEs6VgIHI-LuUGTWyqtHGoXjzPHa1sQJ--CdnHrOUM/exec'
const form = document.forms['submit-to-google-sheet']

try {
    form.addEventListener('submit', e => {
        e.preventDefault()
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
        <div class="spinner-border text-light" role = "status" style = "width: 1rem; height: 1rem; margin: 0 13.71px;">
            <span class="visually-hidden">Loading...</span>
        </div>`
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                // console.log('Success!', response);
                submitBtn.innerHTML = "Success!"
                submitBtn.style.backgroundColor = "#00c000"
                setTimeout(() => {
                    submitBtn.innerHTML = "Send"
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = "#eb00f3"
                }, 5000);
                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
            })
            .catch(error => {
                // console.error('Error!', error.message);
                submitBtn.innerHTML = "Failed!"
                submitBtn.style.backgroundColor = "#ff3737"
                setTimeout(() => {
                    submitBtn.innerHTML = "Send"
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = "#eb00f3"
                }, 5000);
            })
    })
} catch (error) {
    // console.error('Error!', error.message);
    submitBtn.innerHTML = "Failed!"
    submitBtn.style.backgroundColor = "#ff3737"
    setTimeout(() => {
        submitBtn.innerHTML = "Send"
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#eb00f3"
    }, 5000);
}
