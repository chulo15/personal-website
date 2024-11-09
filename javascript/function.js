document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    };

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
