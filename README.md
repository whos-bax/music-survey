# music-survey

### 음악을 얼마나 좋아하시나요?
### [설문조사 홈페이지 이동하기](https://whos-bax.github.io/music-survey/public/index.html)

### 2021년 3,4분기 (2학기)

`Html, Css, JavaScript, SQLite 를 이용해 설문조사 페이지 만들기`

# 설문조사 웹 페이지 뼈대

## 개요

클라이언트/서버 프로그래밍

- 클라이언트: 순수 자바스크립트, HTML, CSS
- 서버: 노드(node.js), 익스프레스(express)
- 데이터베이스: sqlite3

## 요건

다음과 같은 항목들이 포함되야 합니다.

- 하나 선택(라디오) 문제
- 여러 개 선택(체크박스) 문제
- 직접 입력 문제
- `fetch` 이용 데이터 전송
- 객체지향(클래스 이용)

## 데이터 저장

- sqlite3

## 실행 방법

1. 적당한 폴더 명령창에서 `git clone https://compmath.korea.ac.kr/gitlab/courses1/indust-math/2021-2/survey-template.git`
1. `cd survey-template`
1. `code .`를 실행하여 VSCode 실행
1. VSCode 터미널에서 `npm install`(이것은 최초 한 번만 실행합니다.)
1. `npm run start`
1. 브라우저에서 `http://localhost:3003` 접속
