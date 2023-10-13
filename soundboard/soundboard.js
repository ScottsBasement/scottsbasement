// soundboard.js
const soundButtons = document.querySelectorAll('.sound-button');

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = new Audio(button.dataset.sound);
        sound.play();
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, sound.duration * 1000);
    });
});
