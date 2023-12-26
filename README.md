# Metro ownPath

클릭하면 챗형식의 소설이 나타납니다.
그리고 일정 분기에서 사용자가 선택할 수 있는 프로그램입니다.

# 미래할 것들

#### Data - DB활용해서 설계 변환해보기

선택사항 : SQL()이 좋을까 NOSQL(mariaDB + mongoose)이 좋을까?

#### 코어 정립하기

로직과 코어에 대해 다시 정립할 필요가 있다.

#### 리펙토링

1. 반짝거리는 현상(reflow)
   이는 react사용할 때 해결이 가능할 것

2. js를 ts로 바꿔 버그를 미연에 방지한다.

3. app.js가 http의 createServer()를 활용하고 있다.
   express를 활용해도 좋을 것 같다.

#### 디자인 변경

#### 더욱 미래에선 어떨까? : epub의 연구

1. 웹 소설은 현재 컴퓨터 뿐만 아니라, epub등 다양한 형태로 소비자에게 제공되어 있음을 확인
2. 교보, 알라딘, 예스24 등 각자만의 리더기가 존재 이를 탐구할 필요성

#### 다양한 소설을 만들어내는 동적 소설은 어떻게 할 수 있을까? : ai를 활용한 연구

1. AI를 단순히 하나만 사용해본다 : 챗봇의 활용
2. 여러가지의 AI를 통해 역할을 분담 후 비판 및 제 3의 시선의 AI에게 설명해 달라고 한다. : 여러 AI를 활용
3. 퀄리티를 다듬어 본다 : AI 프롬프트 세팅 (자연어, 글쓴이, 옮김이의 어투를 학습시킨다.) <- 이쪽부턴 무엇이라고 명칭도 할 수 없는 영역 (연구 필요)

#### TodoList : 추가할 기능들은 뭐가 있을까?

12/08 가장 먼저 생각나는 건 처음으로 돌아가는 것 [완료]
12/08 버튼 누르면 하나씩 나오게 해볼까? [완료]
12/22 텍스트 박스가 container를 넘어가면 스크롤 위치를 택스트 박스가 보이도록 밑으로 내리는 로직
12/08 스킵 버튼으로 모두 나오게 해볼까?
12/08 자동 버튼도 만들어볼까?
12/08 그러면 일시정지도 있어야겠지
12/08 동적으로 생성되는 선택지 버튼도 있어야겠지
12/08 최종은 소설도 동적 생성이니 OPEN API로 제공하는 AI가 텍스트를 작성할 수 있을까?
12/08 프로토 타입으로 DB에 작성한다면 가능성과 맞먹게 여러가지 가지치기 처럼 테이블이나 프로젝트가 퍼저 나가야되나?
작성해본 가아이디어 : https://kongukjae.notion.site/8dd564bba8e8426cbbd5d291bcdbdcfd?pvs=4

12/11 도전 "initLogic" [처음으로 돌아가는 로직]
12/12 - closure를 활용한 상태 변수 컨트롤 [todo2 : 처음으로 돌아가는 로직 성공 , resetButton branch"!!!!"]

12/16 - 방향 설정

1. 우선 정적인 웹 소설을 완성한다. [진행중]
2. db 설계
3. 그리고 동적 로직으로 바꾸는 방향으로 진행한다.
4. ai 를 활용한 동적 소설을 연구한다.

12/24~26 (진행 중)
독감으로 인해 휴식

### 사용방법

#### 오직 서빙만 필요하다.

```
npm init -y
```

#### app.js에서 서빙을 통해 작동해주십시오

```
node app.js
```
