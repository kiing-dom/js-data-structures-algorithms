const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
    const userInput = document.getElementById('user-input').value.trim();

    if (!userInput) {
        return alert('Please provide a phone number');
    } else if (numberRegex.test(userInput)) {
        results.textContent = "Valid US Number: " + userInput;
    } else {
        results.textContent = "Invalid US Number: " + userInput;
    }
});

clearBtn.addEventListener("click", () => {
    results.textContent = "";
});
