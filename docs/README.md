# 정보보안기사 필기 대비

정보보안기사 필기 PART 1~7, SECTION 01~43 요약과 객관식 기출문제 풀이 기능을 제공하는 개인 학습용 시험 대비 사이트입니다.

## 실행 방법

별도의 설치나 서버 실행 없이 `index.html`을 브라우저에서 열면 됩니다.

## 파일 구조

```text
security-study/
├─ index.html
├─ README.md
├─ css/
│  └─ style.css
├─ js/
│  ├─ data.js
│  ├─ questions.js
│  ├─ updates.js
│  ├─ storage.js
│  └─ app.js
└─ assets/
```

## 내용 추가 위치

- 학습 내용: `js/data.js`의 `studyData`
- 기출문제: `js/questions.js`의 `questionData`
- 업데이트 기록: `js/updates.js`의 `updateLogs`
- 화면과 기능: `js/app.js`
- 디자인: `css/style.css`

SECTION의 `subtopics` 배열에 소주제 객체를 추가하면 내부 소목차와 본문이 자동으로 생성됩니다.

문제는 `questionData` 배열에 추가하며, 문제 지문·보기·정답·풀이·보기별 상세 해설·PART·SECTION·난이도·PDF 페이지를 화면 동작 코드와 분리해 관리합니다. 일반 문제 화면은 요약 목차와 같은 PART 1~7 → SECTION 01~43 계층 목차, SECTION 내부 이전·다음 이동, 보통/어려움 난이도 전환, 선택·채점 이력 자동 저장, 현재 SECTION 기준 맞춘·틀린 문제 모아보기, PART별 채점 초기화, 숫자·Enter·방향키 단축키를 지원합니다. 보통과 어려움은 각각 독립적으로 `PART-SECTION-순번` 검색 번호를 부여하며, 상단 검색창에서 현재 난이도의 번호·지문·보기·해설을 검색할 수 있습니다. 검색 결과에는 `1-1-1` 형식을 사용하고, 일반·저장 문제 풀이 화면에는 SECTION 내부 순번인 `1`, `2` 형식만 표시합니다. 채점 이력이 없는 PART의 초기화 버튼은 자동으로 비활성화됩니다. 저장 문제는 별도의 목차·단일 문제 풀이·전체 목록 최상단 즐겨찾기 정렬·개별 삭제·전체 초기화를 지원하며, 저장 문제가 없으면 초기화 버튼이 비활성화됩니다. 저장 문제 전용 답안과 채점 결과는 기존 문제 이력에 반영하지 않습니다. 정답과 오답을 채점한 뒤 모두 핵심 풀이와 보기별 상세 해설을 표시합니다.

```javascript
{
  id: "question-001",
  originalNumber: 1,
  source: "출처명",
  part: 1,
  difficulty: "normal", // normal 또는 hard
  section: "SECTION 01 정보보호관리의 개념",
  prompt: "문제 지문",
  options: ["보기 1", "보기 2", "보기 3", "보기 4"],
  answer: 1,
  explanation: "채점 후 표시할 핵심 풀이과정",
  optionExplanations: ["1번 해설", "2번 해설", "3번 해설", "4번 해설"],
  image: null,
  pdfPage: 1
}
```

```javascript
{
  id: "section-05",
  number: 5,
  title: "해시함수와 응용",
  subtopics: [
    {
      id: "hash-basic",
      title: "일방향 해시함수",
      content: `<p>정리할 내용을 작성합니다.</p>`
    }
  ],
  content: ""
}
```

`style.css`에는 정의·중요·주의·참고 상자, 표, 코드, 흐름도, 키워드 태그, 인용, 이미지 영역에 사용할 재사용 스타일이 준비되어 있습니다.
