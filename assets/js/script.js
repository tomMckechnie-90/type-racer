document.addEventListener('DOMContentLoaded', function() {
    const sampleTexts = {
        easy: [
            "The cat sat on the mat.",
            "A quick brown fox jumps over the lazy dog.",
            "She sells seashells by the seashore."
        ],
        medium: [
            "The quick brown fox jumps over the lazy dog near the river bank.",
            "Typing is a skill that can be improved with practice and dedication.",
            "JavaScript is a versatile programming language used for web development."
        ],
        hard: [
            "To be or not to be, that is the question.",
            "In the beginning, there was nothing, which exploded.",
            "The only limit to our realization of tomorrow is our doubts of today."
        ]
    };

    const difficultySelect = document.getElementById('difficulty');
    const sampleTextDiv = document.getElementById('sample-text');
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const timeDisplay = document.getElementById('time');
    const wpmDisplay = document.getElementById('wpm');
    const levelDisplay = document.getElementById('level');
    const userInput = document.getElementById('user-input');
    let startTime, endTime;

    function getRandomText(difficulty) {
        const texts = sampleTexts[difficulty];
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    function updateSampleText() {
        const selectedDifficulty = difficultySelect.value;
        const randomText = getRandomText(selectedDifficulty);
        sampleTextDiv.textContent = randomText;
        levelDisplay.textContent = selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);
    }

    function startTest() {
        startTime = new Date();
        startButton.disabled = true;
        stopButton.disabled = false;
        userInput.value = '';
        userInput.disabled = false;
        userInput.focus();
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        timeDisplay.textContent = timeTaken.toFixed(2);
        startButton.disabled = false;
        stopButton.disabled = true;
        userInput.disabled = true;

        const sampleText = sampleTextDiv.textContent;
        const userText = userInput.value;
        const correctWords = calculateCorrectWords(sampleText, userText);
        const wpm = calculateWPM(correctWords, timeTaken);
        wpmDisplay.textContent = wpm;
    }

    function calculateCorrectWords(sampleText, userText) {
        const sampleWords = sampleText.split(' ');
        const userWords = userText.split(' ');
        let correctWords = 0;

        for (let i = 0; i < userWords.length; i++) {
            if (userWords[i] === sampleWords[i]) {
                correctWords++;
            }
        }

        return correctWords;
    }

    function calculateWPM(correctWords, timeTaken) {
        const minutes = timeTaken / 60;
        return Math.round(correctWords / minutes);
    }

    startButton.addEventListener('click', startTest);
    stopButton.addEventListener('click', stopTest);
    difficultySelect.addEventListener('change', updateSampleText);

    // Initialize with a random text from the default difficulty level
    updateSampleText();
});