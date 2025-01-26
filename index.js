const navLinks = document.querySelector('.nav-links')

function onToggleMenu(e) {
    e.name = e.name === 'close' ? 'menu' : 'close'
    navLinks.classList.toggle('top-[9%]')
}


//Nav bar links 

function home() {
    window.location.href = 'http://127.0.0.1:5500/home.html';
}

function shop() {
    window.location.href = 'http://127.0.0.1:5500/shop.html';
}

function products() {
    window.location.href = 'http://127.0.0.1:5500/products.html';
}

function story() {
    window.location.href = 'http://127.0.0.1:5500/story.html';
}

function reviews() {
    window.location.href = 'http://127.0.0.1:5500/reviews.html';
}

function packages() {
    window.location.href = 'http://127.0.0.1:5500/packages.html';
}

function contact() {
    window.location.href = 'http://127.0.0.1:5500/contact.html';
}

