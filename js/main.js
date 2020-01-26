let hamburgerContainer = document.getElementsByClassName('hamburger-container');


hamburgerContainer[0].addEventListener('click',function() {
    let navMenu = document.getElementsByClassName('nav-menu');
    navMenu[0].classList.toggle('active-nav');
    hamburgerContainer[0].classList.toggle('active-hamburger');
})