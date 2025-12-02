const display = document.getElementById("display");

// Adds the number you click to the display
function appendToDisplay(input) {
	display.value += input;
}
// Clears the display screen and resets it back to empty
function clearDisplay() {
	display.value = " ";
}
/* Adds all the displayed numbers along with the mathematical expressions. If it can't sum the numbers then it will error*/
function sum() {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
}
// Key events for all numbers and operators for keyboard use.
document.addEventListener("keydown", (input) => {
	// Only allowed keys in this string expression
	const allowedNum = /^[0-9+\-*/()]$/;
	// Special keys: Clear, Enter, Backspace
	switch (input.key) {
		case "Delete":
			clearDisplay();
			break;
		case "Enter":
			sum();
			break;
		case "Backspace":
			display.value = display.value.slice(0, -1);
			break;
		default:
			input.preventDefault();
	}
	// Tests the keys that are pressed to make sure its only the ones stored in the string expression in the allowedNum variable
	if (input.key.length === 1 && allowedNum.test(input.key)) {
		display.value += input.key;
	}
});
