function sendMessage() {
  const input = document.getElementById("user-input");
  const display = document.getElementById("chat-display");

  const userMessageElement = document.createElement("div");
userMessageElement.innerHTML = `<strong>You:</strong> ${escapeHTML(userMessage)}`;
display.appendChild(userMessageElement);

  display.innerHTML += <div><strong>You:</strong> ${userMessage}</div>;

  // Fake AI response for now
  const aiReply = getFakeAIResponse(userMessage);
  display.innerHTML += <div><strong>MyVation:</strong> ${aiReply}</div>;

  input.value = "";
  display.scrollTop = display.scrollHeight;
}

function getFakeAIResponse(msg) {
  return "Thanks for your message! The real AI is coming soon.";
}
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}
class ChatBot {
    constructor(displayElement, inputElement) {
        this.display = displayElement;
        this.input = inputElement;
    }

    sendMessage() {
        const userMessage = this.input.value.trim();
        if (!userMessage) return;

        this.appendMessage("You", userMessage);
        const aiReply = this.getAIResponse(userMessage);
        this.appendMessage("MyVation", aiReply);

        this.input.value = "";
        this.display.scrollTop = this.display.scrollHeight;
    }

    appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${this.escapeHTML(message)}`;
        this.display.appendChild(messageElement);
    }

    getAIResponse(msg) {
        return "Thanks for your message! The real AI is coming soon.";
    }

    escapeHTML(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }
}
