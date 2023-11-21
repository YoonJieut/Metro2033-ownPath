import { messages } from "./data.js";

const container = document.querySelector('.container');

messages.forEach(message => {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', message.type);

  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');
  profileDiv.innerText = message.author[0];  // 첫 글자만

  const textBox = document.createElement('div');
  textBox.classList.add('text-box');
  textBox.innerText = message.text;

  messageDiv.appendChild(profileDiv);
  messageDiv.appendChild(textBox);
  container.appendChild(messageDiv);
});
