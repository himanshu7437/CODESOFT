// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Function to append characters to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to remove the last character from the display
function backspace() {
    const display = document.getElementById('display');
    let currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

// Function to evaluate the expression
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        const result = eval(display.innerText);
        // Set the result to display
        display.innerText = result;
    } catch (e) {
        // In case of an error, show "Error"
        display.innerText = 'Error';
    }
}
