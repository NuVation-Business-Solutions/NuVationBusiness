function sendMessage() {
  const input = document.getElementById("user-input");
  const display = document.getElementById("chat-display");

  const userMessage = input.value.trim();
  if (!userMessage) return;

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
