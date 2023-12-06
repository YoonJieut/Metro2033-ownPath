let trueBtn = document.getElementById('true');
let falseBtn = document.getElementById('false');
const body = document.body;
const root = document.getElementById('root');
const container = document.getElementById('container');
const textArea = document.getElementById('textArea');
let textBox = document.getElementsByClassName('textBox');




// !!!!대화 텍스트 

const _textBook = [];
const _textArtium = [];
const _textSergey = [];
const _textYeof = [];



// * 요소 추가 로직
// 12/06 이거는 react로 쉽게 해결이 가능할 것 같다.
// let newDiv = document.createElement('div');
// newDiv.className = '대충 이름';
// document.body.appendChild(newDiv);

//! 대화(#container) 창 종료 함수

// ! 대화(#container) 창 생성 로직과 함수

//! 문자열에 "."이 있으면 밑줄로 띄워주는 로직

// ! textArea 안에 textBox 없애주는 로직
// ? 부모만 없애도 다 없어질까? 해결방안 밑의 자식요소까지 같이 사라진다
// ? foreach가 안먹는다. 해결 방안은 NodeList나 배열에서 사용이 가능하다고 한다.
function clearTextBox(){
  let textBox = document.querySelectorAll('.textBox');
  let btnBox = document.querySelectorAll('.btnBox');
  
  if(textBox){
    // 테스트용 한 개 일 때
    // textBox[0].parentNode.removeChild(textBox[0]);
    textBox.forEach((e)=>{
      e.parentNode.removeChild(e);
    })
  }
  if(btnBox){
    btnBox.forEach((e)=>{
      e.parentNode.removeChild(e);
    })
  }
};

// ! 해설 대사 함수
// * textBox>.textBox

// ! 주인공 대사 함수
// * .textBox>.profi+.text

// ! npc 대사 
// * .textBox>.text+.profi



// !!! 스토리 진행 로직
// * 버튼이 눌리면 .btnActive class를 추가함
trueBtn.addEventListener('click',function(){
  console.log(trueBtn);
  trueBtn.classList.toggle('btnActive');
});
falseBtn.addEventListener('click',function(){
  console.log(falseBtn);
  falseBtn.classList.toggle('btnActive');
});


function Story(){
  textArea.addEventListener('click',function(){
    if( trueBtn.classList.contains('btnActive') === true){
      console.log('이야기 시작');
      clearTextBox();
    }
    else if( falseBtn.classList.contains('btnActive') === true ){
      console.log('이야기 종료');
    }
    else{
      console.error('올바른 곳을 선택해주세요')
    }
  })
}
Story();