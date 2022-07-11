# TRIPLE Frontend Homework #3

- 적용된 기술: Create React App, TypeScript, styled-components, ESLint, Stylelint, Prettier

## 1. 구현된 프로젝트 확인 방법

### Vercel로 배포된 페이지

🔗 [링크](https://triple-assignment-ruby.vercel.app/)

### 레포지토리 클론

```
git clone https://github.com/Moon-Ga/TRIPLE_assignment.git
cd TRIPLE_assignment
npm install
npm start
```

## 2. 폴더 구조

- 📁assets

  - 과제 구현에 필요한 이미지를 모아둔 폴더입니다.

- 📁components

  - 화면을 구성하는데에 있어 필요한 컴포넌트들을 모아둔 폴더입니다.

- 📁layouts

  - 페이지 전체에 적용할 레이아웃을 넣은 폴더입니다.

- 📁pages

  - 라우터가 적용 되어 있고, 다수의 페이지가 존재했을 시 페이지를 기준으로 분류가 이루어질 폴더입니다.

- 📁styles

  - 전역 스타일링, 변수, mixins 등 프로젝트에서 사용되는 스타일링 관련 파일들을 모아둔 폴더입니다.

## 3. 구현 방향성

- 요구사항에 맞춰 린팅/포매팅 셋업을 진행하였습니다.
- 홈페이지와 동일한 레이아웃과 스타일을 적용한 버전과 지원자의 기준에 따른 버전 두 가지를 넣었습니다.
- CountUp을 `state`가 아닌 `useRef`를 활용하여 구현했습니다.
- 스타일링의 중복 코드를 최소화하고 재사용성을 고려하였습니다.
- 트리플 프론트엔드 monorepo를 참고하며 작성하였습니다.
- 커밋 메시지는 최대한 상세하고 conventional 하게 작성하였습니다.

## 4. 구현 상세 설명

### styled-components

트리플 홈페이지가 styled-components를 활용했다는 점에서 기술 스택을 통일하는 것이 합리적이라고 판단하였습니다.

### CountUp

CountUp 컴포넌트를 `state`로 구현하는 방법과 `ref`를 활용하여 구현하는 방법 중 `ref`를 선택하였습니다. 그 이유로는 `state`로 구현하게 될 시 카운터가 상승함에 따라 `setState`가 연속적으로 이루어지게 되는데, 그에 따라 재렌더링도 수없이 이루어지기 때문입니다. 만약 다수의 카운터가 화면에 존재하는 등의 경우로 인해 상태 변화가 대량으로 진행돼야 할 경우, 이것은 성능 저하로 직결될 수 있기 때문에 이 부분은 DOM API인 `ref`가 더 적절하다고 판단하였습니다.

### HTML & CSS

HTML은 최대한 semantic한 태그를 활용하였습니다. CSS의 경우 중복된 코드량을 줄이기 위해 전역 변수와 mixins를 활용하고, `display: grid`를 활용하는 등 확장성, 재사용성, 그리고 수정 편리성을 고려하여 작성했습니다. Animation은 라이브러리를 사용하지 않고 직접 구현하였습니다.

## 6. 어려웠던 점, 배운 점, 그리고 느낀 점

- 린터와 포맷터를 설정하는 과정에서 작동이 제대로 이루어지지 않는 버그를 발견했었습니다. 이 부분에 대해 오랜 시간을 들여 트리플 github의 issues와 pull request 등을 확인하고, 린터 설정들을 파악하여 `react-scripts`를 다운그레이드하는 임시방편을 적용했습니다. 이 과정에서 issues를 파악하고 문제를 해결하는 연습을 또 한번 할 수 있었습니다.
