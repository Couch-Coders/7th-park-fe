<div align="center">

![Logo]([https://via.placeholder.com/150x150)](https://parkproj.herokuapp.com/static/media/logo.48bc57895aacd20b6053.png)

# 공원, 어디로갈까?

[Overview](#scroll-overview)
•
[Screenshot](#rice_scene-screenshot)
•
[Demo](#dvd-demo)
•
[Documentation](#blue_book-documentation)

</div>

## 배포링크

Access my site at [공원, 어디로 갈까?](https://parkproj.herokuapp.com/)

## 프로젝트 소개

- 서울시 공원들을 소개받을 수 있는 서비스
  - 서울시 공공 데이터를 이용하여 공원들의 정보를 제공하며, 원하는 공원을 찾아볼 수 있습니다.
- 내가 찾고싶은 지역의 공원만 보기!
  - 본인이 선택한 지역별로 공원들을 필터링해서 볼 수 있습니다.
- 나의 현위치로부터 가까운 순으로 추천!
  - 본인의 위치에서 가까운 공원들을 거리순으로 소개받을 수 있습니다.
  - 거리순뿐만 아니라 별점순으로도 정렬이 가능합니다.
- 가보고 싶은 공원은 체크!
  - 하트버튼을 눌러서 본인이 가고싶은 공원을 표시할 수 있습니다.
  - 본인이 표시한 공원들은 마이페이지에서 한눈에 모아볼 수 있습니다
- 리뷰 및 별점 시스템
  - 공원마다 평균 별점 및 다른 사람들의 리뷰들을 볼 수 있습니다.
  - 로그인하면 본인도 별점을 매길 수 있고 리뷰작성이 가능합니다.

## 사용기술

![PnP Yarn2](https://img.shields.io/badge/Yarn2-PnP-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Next.JS](https://img.shields.io/badge/next.js-TypeScript-007ACC?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Emotion](https://img.shields.io/badge/👩‍🎤_Emotion-CC6699?style=for-the-badge&logo=emotion&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Badge](https://img.shields.io/badge/badge-badge-brightgreen)
![Badge](https://img.shields.io/badge/badge-badge-brightgreen)
![Badge](https://img.shields.io/badge/badge-badge-brightgreen)

## 스크린샷

![Logo](https://via.placeholder.com/750x500)

## 폴더구조

```
.
├── src           # Project source code
├── doc           # Doc for the project
├── .gitignore
├── LICENSE
└── README.md
```

### :bell: Tasks

<details open>
<summary> Task list: </summary>

- [ ] Task 1
- [x] Task 2
- [x] Task 3
- [ ] Task 4

</details>

# 프로젝트 진행

- 권장사항

  - 하루에 한 번씩 무조건 커밋하기
  - 하루에 한 번씩 진행사항 공유 어디까지 작업됐는지 슬랙으로

- 3월 28일(월) ~ 4월 3일(일)

  - 레이아웃 스타일링 작업
  - 로그인을 위한 Firebase 연동 및 Context 이용하여 Auth 상태 주입
  - Browser Router -> Hash Router 변경

- 4월 4일(월) ~ 4월 10일(일)

  - json-server를 활용해 mock data 만들어서 데이터 연동작업 시작
  - 메인 검색 필터 영역 작업
  - 상세페이지 데이터 연동 작업
  - 상세페이지 지도 연동 작업

- 4월 11일(월) ~ 4월 17일(일)

  - 리뷰 데이터 연동 작업
  - 마이페이지 데이터 연동 작업
  - 실 API 연동 작업

- 4월 18일(월) ~ 4월 24일(일)
  - README.md작성
  - 프로젝트 수정 및 완료

# package list

- React
  - yarn create react-app .(.으로 설정하면 현재 폴더에 인스톨)
- react-router-dom
  - yarn add react-router-dom
- styled-components
  - yarn add styled-components
- Ant Design
  - yarn add antd
- GoogleMap
  - yarn add @react-google-maps/api
- ESLint
  - yarn add -D eslint
- Prettier
  - yarn add -D prettier

# 사용한 API

https://data.seoul.go.kr/dataList/OA-394/S/1/datasetView.do
