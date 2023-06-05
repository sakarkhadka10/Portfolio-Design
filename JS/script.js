/*  ===========================================  Toggle Icon Bar ================================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*  ======================================= Scroll Section Active Link  ==============================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Remove the hash value from the URL
    if (history.replaceState) {
        var currentUrlWithoutHash = window.location.href.split('#')[0];
        history.replaceState(null, null, currentUrlWithoutHash);
    }
    
/*================================================= Sticky Nav Bar  ==================================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*  ============================  Remove Toggle Icon & navbar when click navbar link (Scroll) =========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
};

/*================================================  Scroll Reveal ===============================================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form, .btn', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*==================================================  Types JS =================================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Game Developer', 'Graphic Designer', 'Digital Marketing'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll =function(){
    let progressHeight = (window.pageYOffset / totalHeight) *100;
    progress.style.height = progressHeight + "%";
}



