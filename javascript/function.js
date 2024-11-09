document.addEventListener('DOMContentLoaded', function() {
    // Adding the blur effect to the navbar on scroll
    window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    };

    // Adding typing effect to the text
    let text = document.querySelector('.typing');
    let i = 0;
    let textContent = text.textContent;
    text.textContent = '';

    function typeWriter() {
    if (i < textContent.length) {
        text.textContent += textContent.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
    }
    typeWriter();
});
