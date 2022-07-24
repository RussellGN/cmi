let textArea = document.getElementById("message-textarea");
textArea.onfocus = function () {
	if (this.value == "Your Message") {
		this.value = "";
	}
};
