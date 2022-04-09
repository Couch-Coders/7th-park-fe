## About The App

[Name of project] is an app that ...

## Screenshots

`![Writing](https://unsplash.com/photos/VBPzRgd7gfc)`

Picture by [Kelly Sikkema](https://unsplash.com/@kellysikkema)

## Technologies

I used `html`, `css`, ...

## Setup

- download or clone the repository
- run `npm install`
- ...

## Approach

I adopted the `BEM` naming style for my css class names and ...

## Status

[name of project] is still in progress. `Version 2` will be out soon.

## Credits

List of contriubutors:

- [John Doe](johndoe.com)
- [Beginners guide to BEM](link-goes-here.com)

## License

MIT license @ [author](author.com)

# ![TOAST UI Editor](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)

> GFM Markdown and WYSIWYG Editor - Productive and Extensible

[![github release version](https://img.shields.io/github/v/release/nhn/tui.editor.svg?include_prereleases)](https://github.com/nhn/tui.editor/releases/latest) [![npm version](https://img.shields.io/npm/v/@toast-ui/editor.svg)](https://www.npmjs.com/package/@toast-ui/editor) [![license](https://img.shields.io/github/license/nhn/tui.editor.svg)](https://github.com/nhn/tui.editor/blob/master/LICENSE) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/nhn/tui.editor/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) [![code with hearth by NHN Cloud](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-NHN_Cloud-ff1414.svg)](https://github.com/nhn)

<img src="https://user-images.githubusercontent.com/37766175/121809054-446bac80-cc96-11eb-9139-08c6d9ad2d88.png" />

## 🚩 Table of Contents

- [Packages](#-packages)
- [Why TOAST UI Editor?](#-why-toast-ui-editor)
- [Features](#-features)
- [Examples](#-examples)
- [Browser Support](#-browser-support)
- [Pull Request Steps](#-pull-request-steps)
- [Contributing](#-contributing)
- [TOAST UI Family](#-toast-ui-family)
- [Used By](#-used-by)
- [License](#-license)

## 📦 Packages

### TOAST UI Editor

| Name                                                                            | Description                |
| ------------------------------------------------------------------------------- | -------------------------- |
| [`@toast-ui/editor`](https://github.com/nhn/tui.editor/tree/master/apps/editor) | Plain JavaScript component |

### TOAST UI Editor's Wrappers

| Name                                                                                        | Description                                     |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`@toast-ui/react-editor`](https://github.com/nhn/tui.editor/tree/master/apps/react-editor) | [React](https://reactjs.org/) wrapper component |
| [`@toast-ui/vue-editor`](https://github.com/nhn/tui.editor/tree/master/apps/vue-editor)     | [Vue](https://vuejs.org/) wrapper component     |

### TOAST UI Editor's Plugins

| Name                                                                                                                           | Description                     |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| [`@toast-ui/editor-plugin-chart`](https://github.com/nhn/tui.editor/tree/master/plugins/chart)                                 | Plugin to render chart          |
| [`@toast-ui/editor-plugin-code-syntax-highlight`](https://github.com/nhn/tui.editor/tree/master/plugins/code-syntax-highlight) | Plugin to highlight code syntax |
| [`@toast-ui/editor-plugin-color-syntax`](https://github.com/nhn/tui.editor/tree/master/plugins/color-syntax)                   | Plugin to color editing text    |
| [`@toast-ui/editor-plugin-table-merged-cell`](https://github.com/nhn/tui.editor/tree/master/plugins/table-merged-cell)         | Plugin to merge table columns   |
| [`@toast-ui/editor-plugin-uml`](https://github.com/nhn/tui.editor/tree/master/plugins/uml)                                     | Plugin to render UML            |

## 🤖 Why TOAST UI Editor?

TOAST UI Editor provides **Markdown mode** and **WYSIWYG mode**. Depending on the type of use you want like production of _Markdown_ or maybe to just edit the _Markdown_. The TOAST UI Editor can be helpful for both the usage. It offers **Markdown mode** and **WYSIWYG mode**, which can be switched any point in time.

### Productive Markdown Mode

![markdown](https://user-images.githubusercontent.com/37766175/121464762-71e2fc80-c9ef-11eb-9a0a-7b06e08d3ccb.png)

**CommonMark + GFM Specifications**

Today _CommonMark_ is the de-facto _Markdown_ standard. _GFM (GitHub Flavored Markdown)_ is another popular specification based on _CommonMark_ - maintained by _GitHub_, which is the _Markdown_ mostly used. TOAST UI Editor follows both [_CommonMark_](http://commonmark.org/) and [_GFM_](https://github.github.com/gfm/) specifications. Write documents with ease using productive tools provided by TOAST UI Editor and you can easily open the produced document wherever the specifications are supported.

- **Live Preview** : Edit Markdown while keeping an eye on the rendered HTML. Your edits will be applied immediately.
- **Scroll Sync** : Synchronous scrolling between Markdown and Preview. You don't need to scroll through each one separately.
- **Syntax Highlight** : You can check broken Markdown syntax immediately.

### Easy WYSIWYG Mode

![wysiwyg](https://user-images.githubusercontent.com/37766175/121808381-251f5000-cc93-11eb-8c47-4f5a809de2b3.png)

- **Table** : Through the context menu of the table, you can add or delete columns or rows of the table, and you can also arrange text in cells.
- **Custom Block Editor** : The custom block area can be edited through the internal editor.
- **Copy and Paste** : Paste anything from browser, screenshot, excel, powerpoint, etc.

### UI

- **Toolbar** : Through the toolbar, you can style or add elements to the document you are editing.
  ![UI](https://user-images.githubusercontent.com/37766175/121808231-767b0f80-cc92-11eb-82a0-433123746982.png)

- **Dark Theme** : You can use the dark theme.
  ![UI](https://user-images.githubusercontent.com/37766175/121808649-8136a400-cc94-11eb-8674-812e170ccab5.png)

### Use of Various Extended Functions - Plugins

![plugin](https://user-images.githubusercontent.com/37766175/121808323-d8d41000-cc92-11eb-9117-b92a435c9b43.png)

CommonMark and GFM are great, but we often need more abstraction. The TOAST UI Editor comes with powerful **Plugins** in compliance with the Markdown syntax.

**Five basic plugins** are provided as follows, and can be downloaded and used with npm.

- [**`chart`**](https://github.com/nhn/tui.editor/tree/master/plugins/chart) : A code block marked as a 'chart' will render [TOAST UI Chart](https://github.com/nhn/tui.chart).
- [**`code-syntax-highlight`**](https://github.com/nhn/tui.editor/tree/master/plugins/code-syntax-highlight) : Highlight the code block area corresponding to the language provided by [Prism.js](https://prismjs.com/).
- [**`color-syntax`**](https://github.com/nhn/tui.editor/tree/master/plugins/color-syntax) :
  Using [TOAST UI ColorPicker](https://github.com/nhn/tui.color-picker), you can change the color of the editing text with the GUI.
- [**`table-merged-cell`**](https://github.com/nhn/tui.editor/tree/master/plugins/table-merged-cell) :
  You can merge columns of the table header and body area.
- [**`uml`**](https://github.com/nhn/tui.editor/tree/master/plugins/uml) : A code block marked as an 'uml' will render [UML diagrams](http://plantuml.com/screenshot).

## 🎨 Features

- [Viewer](https://github.com/nhn/tui.editor/tree/master/docs/en/viewer.md) : Supports a mode to display only markdown data without an editing area.
- [Internationalization (i18n)](https://github.com/nhn/tui.editor/tree/master/docs/en/i18n.md) : Supports English, Dutch, Korean, Japanese, Chinese, Spanish, German, Russian, French, Ukrainian, Turkish, Finnish, Czech, Arabic, Polish, Galician, Swedish, Italian, Norwegian, Croatian + language and you can extend.
- [Widget](https://github.com/nhn/tui.editor/tree/master/docs/en/widget.md) : This feature allows you to configure the rules that replaces the string matching to a specific `RegExp` with the widget node.
- [Custom Block](https://github.com/nhn/tui.editor/tree/master/docs/en/custom-block.md) : Nodes not supported by Markdown can be defined through custom block. You can display the node what you want through writing the parsing logic with custom block.

## 🐾 Examples

- [Basic](https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic)
- [Viewer](https://nhn.github.io/tui.editor/latest/tutorial-example04-viewer)
- [Using All Plugins](https://nhn.github.io/tui.editor/latest/tutorial-example12-editor-with-all-plugins)
- [Creating the User's Plugin](https://nhn.github.io/tui.editor/latest/tutorial-example13-creating-plugin)
- [Customizing the Toobar Buttons](https://nhn.github.io/tui.editor/latest/tutorial-example15-customizing-toolbar-buttons)
- [Internationalization (i18n)](https://nhn.github.io/tui.editor/latest/tutorial-example16-i18n)

Here are more [examples](https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic) and play with TOAST UI Editor!

## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                                   11+                                                                                   |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |

## 🔧 Pull Request Steps

TOAST UI products are open source, so you can create a pull request(PR) after you fix issues. Run npm scripts and develop yourself with the following process.

### Setup

Fork `main` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

```sh
$ git clone https://github.com/{your-personal-repo}/tui.editor.git
$ npm install
$ npm run build toastmark
$ npm run test editor
```

> TOAST UI Editor uses [npm workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces/), so you need to set the environment based on [npm7](https://github.blog/2021-02-02-npm-7-is-now-generally-available/). If subversion is used, dependencies must be installed by moving direct paths per package.

### Develop

You can see your code reflected as soon as you save the code by running a server. Don't miss adding test cases and then make green rights.

#### Run snowpack-dev-server

[snowpack](https://www.snowpack.dev/) allows you to run a development server without bundling.

```sh
$ npm run serve editor
```

#### Run webpack-dev-server

If testing of legacy browsers is required, the development server can still be run using a [webpack](https://webpack.js.org/).

```sh
$ npm run serve:ie editor
```

#### Run test

```sh
$ npm test editor
```

### Pull Request

Before uploading your PR, run test one last time to check if there are any errors. If it has no errors, commit and then push it!

For more information on PR's steps, please see links in the Contributing section.

## 💬 Contributing

- [Code of Conduct](https://github.com/nhn/tui.editor/blob/master/CODE_OF_CONDUCT.md)
- [Contributing Guideline](https://github.com/nhn/tui.editor/blob/master/CONTRIBUTING.md)
- [Commit Convention](https://github.com/nhn/tui.editor/blob/master/docs/COMMIT_MESSAGE_CONVENTION.md)
- [Issue Guidelines](https://github.com/nhn/tui.editor/tree/master/.github/ISSUE_TEMPLATE)

## 🍞 TOAST UI Family

- [TOAST UI Calendar](https://github.com/nhn/tui.calendar)
- [TOAST UI Chart](https://github.com/nhn/tui.chart)
- [TOAST UI Grid](https://github.com/nhn/tui.grid)
- [TOAST UI Image Editor](https://github.com/nhn/tui.image-editor)
- [TOAST UI Components](https://github.com/nhn)

## 🚀 Used By

- [NHN Dooray! - Collaboration Service (Project, Messenger, Mail, Calendar, Drive, Wiki, Contacts)](https://dooray.com)
- [UNOTES - Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=ryanmcalister.Unotes)

## 📜 License

This software is licensed under the [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) © [NHN Cloud](https://github.com/nhn).

## Demo link:

Access my site at [google.com](https://google.com)

<div align="center">

![Logo](https://via.placeholder.com/150x150)

# Title

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

[Overview](#scroll-overview)
•
[Screenshot](#rice_scene-screenshot)
•
[Demo](#dvd-demo)
•
[Documentation](#blue_book-documentation)

</div>

## :bookmark_tabs: Menu

- [!TOAST UI Editor](#)
  - [🚩 Table of Contents](#-table-of-contents)
  - [📦 Packages](#-packages)
    - [TOAST UI Editor](#toast-ui-editor)
    - [TOAST UI Editor's Wrappers](#toast-ui-editors-wrappers)
    - [TOAST UI Editor's Plugins](#toast-ui-editors-plugins)
  - [🤖 Why TOAST UI Editor?](#-why-toast-ui-editor)
    - [Productive Markdown Mode](#productive-markdown-mode)
    - [Easy WYSIWYG Mode](#easy-wysiwyg-mode)
    - [UI](#ui)
    - [Use of Various Extended Functions - Plugins](#use-of-various-extended-functions---plugins)
  - [🎨 Features](#-features)
  - [🐾 Examples](#-examples)
  - [🌏 Browser Support](#-browser-support)
  - [🔧 Pull Request Steps](#-pull-request-steps)
    - [Setup](#setup-1)
    - [Develop](#develop)
      - [Run snowpack-dev-server](#run-snowpack-dev-server)
      - [Run webpack-dev-server](#run-webpack-dev-server)
      - [Run test](#run-test)
    - [Pull Request](#pull-request)
  - [💬 Contributing](#-contributing)
  - [🍞 TOAST UI Family](#-toast-ui-family)
  - [🚀 Used By](#-used-by)
  - [📜 License](#-license)
  - [Demo link:](#demo-link)
- [Title](#title)
  - [:bookmark_tabs: Menu](#bookmark_tabs-menu)
  - [:scroll: Overview](#scroll-overview)
  - [:rice_scene: Screenshot](#rice_scene-screenshot)
  - [:dvd: Demo](#dvd-demo)
  - [:blue_book: Documentation](#blue_book-documentation)
  - [:exclamation: Requirements](#exclamation-requirements)
  - [:floppy_disk: Installation and usage](#floppy_disk-installation-and-usage)
    - [:rotating_light: Tests](#rotating_light-tests)
    - [:heavy_check_mark: Dependencies and libs](#heavy_check_mark-dependencies-and-libs)
    - [:open_file_folder: Folder Structure](#open_file_folder-folder-structure)
  - [:gift: Release History](#gift-release-history)
  - [:heart_eyes_cat: Contributing](#heart_eyes_cat-contributing)
    - [:bell: Tasks](#bell-tasks)
  - [:memo: License](#memo-license)
  - [:smiley_cat: Author](#smiley_cat-author)
- [공원, 어디로갈까?](#공원-어디로갈까)
- [프론트 프로젝트 작업 목표](#프론트-프로젝트-작업-목표)
- [package list](#package-list)
- [사용한 API](#사용한-api)

## :scroll: Overview

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut praesentium neque assumenda! Tempore culpa nihil laborum distinctio vel, illo quod veniam. Excepturi soluta beatae sed iusto sunt, impedit ducimus dignissimos?

## :rice_scene: Screenshot

![Logo](https://via.placeholder.com/750x500)

## :dvd: Demo

Lorem ipsum dolor sit amet consectetur, adipisicing elit.

| url                      | login          | password |
| ------------------------ | -------------- | -------- |
| http://exemplo.com/admin | admin@mail.com | 123      |

## :blue_book: Documentation

Documentation lives at readthedocs.org

## :exclamation: Requirements

- [Node](https://nodejs.org/en/download/)
- [PHP](https://php.net/)

## :floppy_disk: Installation and usage

```
git clone https://github.com/<user>/<project>
```

### :rotating_light: Tests

```
$ npm run test
```

### :heavy_check_mark: Dependencies and libs

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [React PDF](https://react-pdf.org/)

### :open_file_folder: Folder Structure

```
.
├── src           # Project source code
├── doc           # Doc for the project
├── .gitignore
├── LICENSE
└── README.md
```

## :gift: Release History

- 0.2.0
  - CHANGE: Remove function
  - ADD: Add init()
- 0.1.1
  - FIX: Crash when calling baz()
- 0.1.0
  - CHANGE: Rename foo() to bar()
- 0.0.1
  - Init the project

## :heart_eyes_cat: Contributing

<details open>
<summary> Steps to contribute: </summary>

- Fork it (https://github.com/yourname/yourproject/fork);
- Create your feature branch (git checkout -b feature/fooBar);
- Commit your changes (git commit -am 'Add some fooBar');
- Push to the branch (git push origin feature/fooBar);
- Create a new Pull Request;

</details>

### :bell: Tasks

<details open>
<summary> Task list: </summary>

- [ ] Task 1
- [x] Task 2
- [x] Task 3
- [ ] Task 4

</details>

## :memo: License

The [MIT License]() (MIT)

## :smiley_cat: Author

- [@walternascimentobarroso](https://walternascimentobarroso.github.io/)

Made with &nbsp;❤️&nbsp;

# 공원, 어디로갈까?

공원, 어디로 갈까? 프론트 저장소 입니다.

# 프론트 프로젝트 작업 목표

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
