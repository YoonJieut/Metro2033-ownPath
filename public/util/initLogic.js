
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



// todo3: container 스크롤이 바닥에 닿으면 처음으로 돌아간다.

// todo5 : 