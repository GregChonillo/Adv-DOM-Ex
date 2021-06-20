function solve() {
	let AnswerKey = [
		"onclick",
		"JSON.stringify()",
		"A programming API for HTML and XML documents",
	];
	let numOfAnsCorrect = 0;
	let idx = 0;
	Array.from(document.querySelectorAll(".answer-text")).map((x) =>
		x.addEventListener("click", function nextSection(e) {
			if (AnswerKey.includes(e.target.textContent)) {
				numOfAnsCorrect++;
			}
			let currSection = document.querySelectorAll("section")[idx];
			currSection.style.display = "none";
			if (document.querySelectorAll("section")[idx + 1] !== undefined) {
				let nextSection = document.querySelectorAll("section")[idx + 1];
				nextSection.style.display = "block";
				idx++;
			} else {
				document.querySelector("#results").style.display = "block";
				if (numOfAnsCorrect !== 3) {
					document.querySelector(
						"#results h1"
					).textContent = `You have ${numOfAnsCorrect} right answers`;
				} else {
					document.querySelector("#results h1").textContent =
						"You are recognized as top JavaScript fan!";
				}
			}
		})
	);
}
