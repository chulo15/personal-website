document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    };
    // kapag pinindut yung app iikot yung card tapos may text na kung ano na yung expertise example "intermidiate" "beginner" "advanced" "expert"
    var htmllogo = document.getElementById('htmllogo');

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
