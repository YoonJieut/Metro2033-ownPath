// data.js에서 messages 가져오기
// 순서에 유의하라
import { messages } from "../scriptData/data.js";


// scriptData 타입 정의
interface ScriptData {
  type: string;
  author?: string;
  text: string;
}


const scriptOrder: string[] = ['data', 'data1-1', 'data1-2', 'data1-3'];
const container: HTMLElement = document.querySelector(".container") as HTMLElement;

let currentScriptIndex: number = 0;

async function loadNextScript(): Promise<void> {
  container.innerHTML = '';
  container.scrollTop = 0;
  if (currentScriptIndex < scriptOrder.length) {
      const scriptName: string = scriptOrder[currentScriptIndex];
      const { messages }: { messages: ScriptData[] } = await import(`../scriptData/${scriptName}.js`);
      displayScript(messages);
      currentScriptIndex++;
  } else if (currentScriptIndex === scriptOrder.length) {
      displayBranchButtons();
      container.removeEventListener('click', loadNextScript)
  }
}

async function displayScript(script: ScriptData[]): Promise<void> {
  script.forEach((message: ScriptData) => {
      const messageDiv: HTMLElement = document.createElement('div');
      messageDiv.classList.add('message', message.type);

      if (message.type === 'narration') {
          const narrationText: HTMLElement = document.createElement('div');
          narrationText.classList.add('narration');
          narrationText.innerText = message.text;
          messageDiv.appendChild(narrationText);
      } else {
          const profileDiv: HTMLElement = document.createElement('div');
          profileDiv.classList.add('profile');
          profileDiv.innerText = message.author ? message.author[0] : '';

          const textBox: HTMLElement = document.createElement('div');
          textBox.classList.add('text-box');
          textBox.innerText = message.text;

          messageDiv.appendChild(profileDiv);
          messageDiv.appendChild(textBox);
      }

      container.appendChild(messageDiv);
  });
}


function displayBranchButtons(): void {
  // 필요한 경우 타입을 추가할 수 있습니다.
  const btn1 = document.createElement("button");
  btn1.innerText = "분기 1로 가기";
  btn1.onclick = async () => {
    const { messages } = await import("../scriptData/data2-1.js");
    container.innerHTML = '';  // 내용 초기화
    container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
    displayScript(messages);
  }
  
  const btn2 = document.createElement("button");
  btn2.innerText = "분기 2로 가기";
  btn2.onclick = async () => {
    const { messages } = await import("../scriptData/data2-2.js");
    container.innerHTML = '';  // 내용 초기화
    container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
    displayScript(messages);
  };

  container.appendChild(btn1);
  container.appendChild(btn2);
}

// 초기 로딩
displayScript(messages);
currentScriptIndex++;

/**
 * 컨테이너 클릭시 다음으로 넘어가는 이벤트 설정
 * 단, 마지막에 다다르면 버튼을 생성한다.
 */
container.addEventListener('click', loadNextScript);