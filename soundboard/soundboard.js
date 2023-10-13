// soundboard.js
const soundButtons = document.querySelectorAll('.sound-button');

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = new Audio(button.dataset.sound);
        sound.play();
        button.classList.add('active');
    });

    button.addEventListener('mouseup', () => {
        button.classList.remove('active');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('active');
    });
});
