function solve() {
	const keys = Array.from(document.getElementsByClassName("keys"));
	const expOutput = document.getElementById("expressionOutput");
	const result = document.getElementById("result");
	const clearButton = document.querySelector(".clear");
	let operand;
	let firstNum = "";
	let secNum = "";
	const calc = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
	};
	keys.map((key) =>
		key.addEventListener("click", function (event) {
			const currSelection = event.target.value;
			clearButton.addEventListener("click", () => {
				expOutput.textContent = "";
				result.textContent = "";
				firstNum = "";
				secNum = "";
				operand = "";
			});
			if (
				+currSelection ||
				currSelection == "." ||
				currSelection == "0"
			) {
				if (!operand) {
					firstNum += currSelection;
					expOutput.textContent += currSelection;
				} else {
					secNum += currSelection;
					expOutput.textContent += currSelection;
				}
			} else if (calc.hasOwnProperty(currSelection)) {
				operand = currSelection;
				expOutput.textContent += ` ${operand} `;
			} else if (currSelection == "=") {
				if (+firstNum && +secNum) {
					result.textContent = calc[operand](+firstNum, +secNum);
				} else {
					result.textContent = "NaN";
				}
			}
		})
	);
}
