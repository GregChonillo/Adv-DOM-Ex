function solve() {
	let sndBtn = document.querySelector("button#send");
	let sndTxtArea = document.querySelector("textarea#chat_input");
	let chatMsgs = document.querySelector("div#chat_messages");
	sndBtn.addEventListener("click", (ev) => {
		let msg = sndTxtArea.value;
		let gMsg = document.createElement("div");
		gMsg.classList.add("my-message", "message");
		gMsg.textContent = msg;
		chatMsgs.appendChild(gMsg);
		sndTxtArea.value = "";
	});
}
//greg was here
