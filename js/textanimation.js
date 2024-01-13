document.addEventListener("DOMContentLoaded", function (){
    const animatedIntro = document.querySelector(".animated-name");
    const animatedBlurb = document.querySelector(".animated-blurb");

    animatedIntro.addEventListener('animationend', function (){
        animatedBlurb.classList.add('animate');
    })

    animatedIntro.classList.add('animate');
});