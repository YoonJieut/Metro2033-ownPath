

async function loadInitialScript() {
  const { messages } = await import("../scriptData/data.js");
  const container = document.querySelector(".container");
  container.innerHTML = '';
  container.scrollTop = 0;
  displayScript(messages);  // displayScript 함수는 해당 모듈로 import 해야합니다.
}

export function createResetButton() {
  const resetButton = document.createElement("button");
  resetButton.innerText = "처음부터 다시 시작";
  resetButton.onclick = () => loadInitialScript();
  return resetButton;
}
