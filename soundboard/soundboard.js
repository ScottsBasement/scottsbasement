// soundboard.js
const soundButtons = document.querySelectorAll('.sound-button');
let activeSounds = [];

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = new Audio(button.dataset.sound);
        activeSounds.push(sound);
        sound.play();
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, sound.duration * 1000);
    });
});

document.addEventListener('keydown', event => {
    // Check if Ctrl and S keys are pressed
    if (event.ctrlKey && event.key === 's') {
        stopAllSounds();
    }
});

function stopAllSounds() {
    activeSounds.forEach(sound => {
        sound.pause();
    });
    activeSounds = [];
}
