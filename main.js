let currentDisplay = '';

function appendToDisplay(value) {
    currentDisplay += value;
    document.getElementById('display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        // Evaluate only safe expressions
        currentDisplay = eval(currentDisplay).toString();
    } catch {
        currentDisplay = 'Error';
    }
    document.getElementById('display').value = currentDisplay;
}


document.addEventListener('keydown', function (e) {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculateResult();
    } else if (e.key === 'Backspace') {
        currentDisplay = currentDisplay.slice(0, -1);
        document.getElementById('display').value = currentDisplay;
    } else if (e.key.toLowerCase() === 'c') {
        clearDisplay();
    }
});