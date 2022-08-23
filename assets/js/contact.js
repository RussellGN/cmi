import Botpoison from "@botpoison/browser";

const botpoison = new Botpoison({
	publicKey: "pk_1197335d-48ea-4d06-86f9-10be4aaccf44",
});

const textArea = document.getElementById("message-textarea");
textArea.onfocus = function () {
	if (this.value == "Your Message") {
		this.value = "";
	}
};
