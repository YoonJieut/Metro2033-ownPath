// todo : 처음으로 돌아가는 버튼을 만든다.

async function loadInitialScript() {
  const { messages } = await import("../scriptData/data.js");
  const container = document.querySelector(".container");
  container.innerHTML = "";
  container.scrollTop = 0;
  displayScript(messages); // displayScript 함수는 해당 모듈로 import 해야합니다.
}

export function createResetButton() {
  const resetButton = document.createElement("button");
  resetButton.innerText = "처음부터 다시 시작";
  resetButton.onclick = () => loadInitialScript();
  return resetButton;
}

// // todo2 : 자연스럽게 처음으로 돌아간다.
// // * 상태관리를 활용한 로직이 될 것 같다.
// // todo4 : currentScriptIndex를 다루는 클로져함수가 필요할 거 같다.

// * 상태관리하는 클로져 패턴으로 작성
// dom에 직접적으로 이벤트를 넣어줄 때 사용하면 편할 것
export function createCounter() {
  let count = 0;

  return {
    increase: function () {
      count += 1;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

// todo3: container 스크롤이 바닥에 닿으면 처음으로 돌아간다.
