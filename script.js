function randomFlicker(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(items => items.classList.remove('flicker'));
    const randomIndex = Math.floor(Math.random() * gridItems.length);
    gridItems[randomIndex].classList.add('flicker');
}
setInterval(randomFlicker, Math.random() * 4000);

function signinPopup(){
    document.getElementById("signin-tab-container").style.display = "flex";
    document.getElementById("signin-tab").classList.add('signin-tab-animation');
    document.body.classList.add('lock-scroll');
    document.getElementById("layout").classList.add('dull');
}