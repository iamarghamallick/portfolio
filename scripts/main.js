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

// update the content of portfolio section 
portfolioContainer = document.getElementById('portfolio-container')
const url = "assets/projects/portfolio_images.json"
const fetchProjects = async () => {
    // get call
    let request = await fetch(url)
    let response = await request.json()
    let portfolioData = response.portfolio
    console.log(portfolioData)

    // updating the content
    let html = ""
    portfolioData.map((item) => {
        html += `
        <div class="content portfolio-item mx-auto">
        <div class="content-overlay"></div>
        <img class="content-image"
            src="assets/projects/${item.image}"
            alt="" class="portfolio-image">
        <div class="content-details fadeIn-bottom">
            <h3 class="content-title">${item.title}</h3>
            <p class="content-text">${item.description}</p>
        </div>
        <div class="button-group">
            <button type="button" class="btn my-btn mx-3"><a href="${item.url}" target="_blank"><i class="fa-solid fa-link"></i>
                    Visit</a></button>
        </div>
    </div>
        `
    })
    portfolioContainer.innerHTML = html;
}
fetchProjects();