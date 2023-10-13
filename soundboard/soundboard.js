// soundboard.js
const soundButtons = document.querySelectorAll('.sound-button');
let activeSounds = [];
const stopInstruction = document.getElementById('stop-instruction'); // Get the instruction element

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

// Show the instruction message after a short delay
setTimeout(() => {
    stopInstruction.style.display = 'block';
}, 3000); // Display the message after 3 seconds
