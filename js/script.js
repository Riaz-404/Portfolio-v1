let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about', { delay: 200, origin: 'top' });
sr.reveal('.education', { delay: 200, origin: 'left' });
sr.reveal('.skill', { delay: 200, origin: 'left' });
sr.reveal('.projects-text, .contact-text', { delay: 200, origin: 'left' });
sr.reveal('.project', { delay: 300, origin: 'top' });
sr.reveal('.contact-img', { delay: 300, origin: 'top' });
sr.reveal('.contact-form', { delay: 300, origin: 'right' });


