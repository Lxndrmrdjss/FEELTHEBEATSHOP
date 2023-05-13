const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <a href="#"><img src="img/profile.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="home.html" class="link">home</a></li>
            <li class="link-item"><a href="product.html" class="link">product</a></li>
            <li class="link-item"><a href="about.html" class="link">about</a></li>
            <li class="link-item"><a href="contact.html" class="link">contact</a></li>
        </ul>
    `;
}

createNav();