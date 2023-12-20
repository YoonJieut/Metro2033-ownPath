export function initScroll(){
  const container = document.querySelector(".container");
  container.innerHTML = '';  // 내용 초기화
  container.scrollTop = 0; // 스크롤 위치 맨 위로 설정
}
