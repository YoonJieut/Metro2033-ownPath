import { messages } from "../scriptData/data.js";
import { createCounter } from "./initLogic.js";

const scriptOrder = ["data", "data1-1", "data1-2", "data1-3"];
export const container = document.querySelector(".container");

let currentScriptIndex = createCounter();

function initScroll() {
  container.innerHTML = ""; // 내용 초기화
  container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
}

// 다음 스크립트를 await로 import하는 방식의 모듈화
// addEventListener의 비동기를 빼주고 여기에 몰빵하여
// async를 최대한 컨트롤해본다.
async function loadNextScript() {
  initScroll();

  if (currentScriptIndex.getCount() < scriptOrder.length) {
    const scriptName = scriptOrder[currentScriptIndex.getCount()];
    const { messages } = await import(`../scriptData/${scriptName}.js`);
    displayScript(messages);
    currentScriptIndex.increase();
  }
  // 모든 스크립트가 표시되었다면 분기 선택 버튼 표시
  else if (currentScriptIndex.getCount() === scriptOrder.length) {
    displayBranchButtons();

    // 생성되고 이벤트 삭제
    // 이러면 닷시는 내용을 추가할 수 없게 되버린다. 나중에 삭제 요망
    container.removeEventListener("click", loadNextScript);
  }
}

// 메세지 생성하는 함수
function displayScript(script) {
  script.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", message.type);

    if (message.type === "narration") {
      const narrationText = document.createElement("div");
      narrationText.classList.add("narration");
      narrationText.innerText = message.text;
      messageDiv.appendChild(narrationText);
    } else {
      const profileDiv = document.createElement("div");
      profileDiv.classList.add("profile");
      profileDiv.innerText = message.author[0];

      const textBox = document.createElement("div");
      textBox.classList.add("text-box");
      textBox.innerText = message.text;

      messageDiv.appendChild(profileDiv);
      messageDiv.appendChild(textBox);
    }

    container.appendChild(messageDiv);
  });
}

// todo : 나중에 함수화 해서 버튼을 동적생성하자.
//버튼 생성 함수
function displayBranchButtons() {
  const btn1 = document.createElement("button");
  btn1.innerText = "다시 길을 떠난다.";
  btn1.onclick = async () => {
    const { messages } = await import("../scriptData/data2-1.js");
    initScroll();
    displayScript(messages);

    // 의사코드 1. 변수를 초기화 한다.
    // 의사코드 2. 꺼놓은 이벤트를 다시 키고
    // 의사코드 3. loadNextScript를 실행한다.
    //변수 초기화
    currentScriptIndex.reset();
    //처음 로직 실행
    container.addEventListener("click", loadNextScript);
  };

  const btn2 = document.createElement("button");
  btn2.innerText = "도와달라고 요청한다.";
  btn2.onclick = async () => {
    const { messages } = await import("../scriptData/data2-2.js");
    initScroll();
    displayScript(messages);
    // * 변수 초기화를 하지 않으면 버튼 선택으로 돌아가는 것
    // * 이거 어디에 쓸만할 거 같은데?
    container.addEventListener("click", loadNextScript);
  };

  // flexDiv 생성
  /**
   * 정렬용 div를 생성합니다.
   */
  const flexDiv = document.createElement("div");
  flexDiv.classList.add("flex");

  container.appendChild(flexDiv);
  flexDiv.appendChild(btn1);
  flexDiv.appendChild(btn2);
}

// 초기 로딩 시 첫번째 스크립트 표시
displayScript(messages);
currentScriptIndex.increase();
// 컨테이너 클릭시 다음으로 넘어가는 이벤트 설정
// 단, 마지막에 다다르면 버튼을 생성한다.
container.addEventListener("click", loadNextScript);
