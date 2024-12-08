function randomFlicker(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(items => items.classList.remove('flicker'));
    const randomIndex = Math.floor(Math.random() * gridItems.length);
    gridItems[randomIndex].classList.add('flicker');
}
setInterval(randomFlicker, Math.random() * 4000);

function signinPopup(){
    document.getElementById("sign-in-tab-bg").style.display = "flex";
    document.getElementById("signin-tab-container").style.display = "flex";
    document.getElementById("signin-tab").classList.add('signin-tab-animation');
    document.body.classList.add('lock-scroll');
    //document.getElementById("layout").classList.add('dull');
}

function closePopup(){
    document.getElementById("sign-in-tab-bg").style.display = "none";
    document.getElementById("signin-tab-container").style.display = "none";
    document.getElementById("signin-tab").classList.remove('signin-tab-animation');
    document.body.classList.remove('lock-scroll');
}

function leaderboardsPopup(){
    document.getElementById("leaderboards-bg").style.display = "flex";
    document.getElementById("leaderboards-tab").style.display = "flex";
    document.body.classList.add('lock-scroll');
}

function closeLeaderboardsPopup(){
    document.getElementById("leaderboards-bg").style.display = "none";
    document.getElementById("leaderboards-tab").style.display = "none";
    document.body.classList.remove('lock-scroll');
}

function Wheels_of_fury(){
    window.open("Wheels_of_fury.html");
}
