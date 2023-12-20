
// todo : 처음으로 돌아가는 버튼을 만든다.


// todo2 : 자연스럽게 처음으로 돌아간다.
// * 상태관리를 활용한 로직이 될 것 같다.
export function createCounter() {
  let count = 0;

  return {
    increase: function() {
      count += 1;
      return count;
    },
    reset: function() {
      count = 0;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

// // todo3: container 스크롤이 바닥에 닿으면 처음으로 돌아간다. 
// todo3-1 : 여기서 처음으로 돌아가는 건 , counter를 0으로 바꾸는 실행함수가 될 것 같다.
// * 모듈로 부르는데 어떻게 메인에 있는 변수를 바꾸지?
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight) {
    initScroll();
  }
});




