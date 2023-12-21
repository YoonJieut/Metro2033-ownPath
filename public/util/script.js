import { messages } from "../scriptData/data.js";
import { createCounter } from "./initLogic.js"; 
import { initScroll } from "./initScroll.js"; 

const scriptOrder = ['data', 'data1-1', 'data1-2', 'data1-3'];
const container = document.querySelector(".container");
let currentScriptIndex = createCounter();

let currentMessageIndex = 0; // 현재 메시지 인덱스
let currentMessages = [];    // 현재 스크립트 파일의 메시지들

async function loadNextScript() {
  if (currentMessageIndex < currentMessages.length) {
    // 현재 스크립트 파일의 다음 메시지를 기존 메시지들과 함께 표시
    // * 슬라이스를 통한 배열 복사 표현이다.
    displayScript(currentMessages.slice(0, currentMessageIndex + 1));
    currentMessageIndex++;
  } else {
    // 현재 스크립트 파일의 마지막 메시지를 표시한 후
    if (currentScriptIndex.getCount() < scriptOrder.length) {
      // 다음 스크립트 파일 로드
      const scriptName = scriptOrder[currentScriptIndex.getCount()];
      const { messages } = await import(`../scriptData/${scriptName}.js`);
      currentMessages = messages;
      currentMessageIndex = 0;
      displayScript([currentMessages[currentMessageIndex]]);
      currentMessageIndex++;
      currentScriptIndex.increase();
    } else {
      // 모든 스크립트 파일을 표시한 경우
      displayBranchButtons();
      container.removeEventListener('click', loadNextScript);
    }
  }
}


function displayScript(script) {
    container.innerHTML = ''; // 이전 메시지 지우기
    script.forEach(message => {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', message.type);

      if (message.type === 'narration') {
          const narrationText = document.createElement('div');
          narrationText.classList.add('narration');
          narrationText.innerText = message.text;
          messageDiv.appendChild(narrationText);
      } else {
          const profileDiv = document.createElement('div');
          profileDiv.classList.add('profile');
          profileDiv.innerText = message.author[0];

          const textBox = document.createElement('div');
          textBox.classList.add('text-box');
          textBox.innerText = message.text;

          messageDiv.appendChild(profileDiv);
          messageDiv.appendChild(textBox);
      }

      container.appendChild(messageDiv);
    });
}

function displayBranchButtons() {
  // 버튼 생성 로직 (기존 코드와 동일)
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
    container.addEventListener('click', loadNextScript);
  };

  const btn2 = document.createElement("button");
  btn2.innerText = "도와달라고 요청한다.";
  btn2.onclick = async () => {
    const { messages } = await import("../scriptData/data2-2.js");
    initScroll();
    displayScript(messages);
    container.addEventListener('click', loadNextScript);

  };

  // 버튼을 담을 flex div 생성
  const flexDiv = document.createElement('div');
  flexDiv.classList.add('flex');
  container.appendChild(flexDiv);
  flexDiv.appendChild(btn1);
  flexDiv.appendChild(btn2);
}




// 컨테이너 클릭시 다음 스크립트로 넘어가는 이벤트 설정
container.addEventListener('click', loadNextScript);
