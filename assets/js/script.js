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

    function getRandomText(difficulty) {
        const texts = sampleTexts[difficulty];
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    function updateSampleText() {
        const selectedDifficulty = difficultySelect.value;
        const randomText = getRandomText(selectedDifficulty);
        sampleTextDiv.textContent = randomText;
    }

    difficultySelect.addEventListener('change', updateSampleText);

    // Initialize with a random text from the default difficulty level
    updateSampleText();
});