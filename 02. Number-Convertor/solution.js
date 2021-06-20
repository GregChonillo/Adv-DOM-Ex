function solve() {
	//add select options
	let selectElem = document.querySelector("#selectMenuTo");
	let binary = document.createElement("option");
	let hexadecimal = document.createElement("option");
	binary.value = "binary";
	binary.text = "Binary";
	hexadecimal.value = "hexadecimal";
	hexadecimal.text = "Hexadecimal";
	selectElem.add(binary);
	selectElem.add(hexadecimal);

	//add click event
	document.querySelector("button").addEventListener("click", clickEvent);
	function clickEvent() {
		//get values
		let decimalNum = +document.querySelector("#input").value;
		let selectElem = document.querySelector("#selectMenuTo");
		let convertTo = selectElem.options[selectElem.selectedIndex].text;

		//convert
		let result;
		switch (convertTo) {
			case "Binary":
				result = decimalNum.toString(2);
				break;
			case "Hexadecimal":
				result = decimalNum.toString(16).toUpperCase();
				break;
		}
		//append output
		document.querySelector("#result").value = result;
	}
}
