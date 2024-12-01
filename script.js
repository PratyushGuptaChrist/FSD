function randomFlicker(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(items => items.classList.remove('flicker'));
    const randomIndex = Math.floor(Math.random() * gridItems.length);
    gridItems[randomIndex].classList.add('flicker');
}
setInterval(randomFlicker, Math.random() * 4000);