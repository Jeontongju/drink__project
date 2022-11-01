# drink__project

## 페이지
- USER(사용자)
    - `술 설명페이지를 제외하고 전부 로그인을 해야 이용할 수 있어서 로그인이 되지 않았다면 로그인으로 리다이렉션 되게끔 구현`
    - Main(GET : /index)
        - 술 이름으로 검색(GET /drink ? title = "")
            - `javascript를 사용해서 단어 검색으로 응용`
        - 술 상세페이지 (GET /drink/:id)
            - 일단 검색으로 하면 result페이지 먼저
            - result에서 click하거나 main의 상품 12개 클릭하면 detail page가 나옴. 
            - `결국 result, 상품 click 2가지 방법으로 갈 수 있음`
        - 술 정렬 (GET /drink ? )
            - 맛 별로 검색을 만듦.
        - 술 리스트(12개)
            - `일부만 만듦 => detail page에서 다 보여줄 생각` 
            - 이미지
            - title
            - price
            - volume(술 용량(단위 ml))
            - type(종류)
            - alchol(도수)
            - sweet(단맛)
    - Login(GET : /local/index)
        - passport, bcrypt를 사용해서 로그인.
    - Register(GET : /new/index)
        - bcrypt를 사용해서 password field한정 `plain문에서 hashed문으로 바꾼 후 db에 save => 보완성 up`
    - myPage(GET : /my-pages/index)
    - logout(GET : /logout)
    - 취향(GET : /drink-type/index)
        - 질문 8개(db에 넣어둠)
        - 
    - 주점(GET : /drink-shop/index)
    - 술 설명(GET : /drink-ex/index)
- ADMIN(관리자)
    - 질문관리
    - 유져관리
    - 술관리
- Flavor type(1-4)
    - 1 : 대부분 sweet 3이상 cool 3미만(달면서 연한 맛)
    - 2 : 6각형 type => 모든 data가 2나 3입(벨런스 type => 주당은 아닌...)
    - 3 : 단맛은 낮고(2이하) 신맛 3이상(단맛은 싫어하고 신맛을 좋아하는)
    - 4 : 모든 data가 다 3이상(모두 잘 마심 강렬함..)

## 기능

## DATABASE

## 개발환경
- ## Front End
    - React의 필요성을 느껴보고자 프레임워크를 사용하지 않음.
    - HTML, CSS, JAVASCRIPT, EJS템플릿 엔진을 사용해서 개발
    - CSS를 지역별로 모듈화해서 LINK시킴.
    - JAVASCRIPT를 기능별로 모듈화해서 연결.


## BACK_END
- 개발 환경
    - 노드JS 런타임을 사용해서 JAVASCRIPT로 서버 개발
    - EXPRESS서버 사용
    - Router함수를 사용하여, router모듈화.


## 프로젝트 느낀 점 && 힘들었던 점
- Front
    - `2022-10-27`
        - react를 사용하지 않아서 공통된 html상자들이 너무 많이 나와서 코드도 길어지고 파일도 많아져서 힘듦.
        - `react 컴포넌트를 사용했으면 훨씬 더 간단했을 것 같다.`
        - css를 모듈화를 파일별로 했는데, 역시 겹치는 것도 너무 많아지고 코드도 길어져서 힘들었음.
        - 부족한 javascript실력으로 함수화를 시켜주지 못 했음.

    - 2022-10-31
        - 배열 내부의 객체 값만 뽑아서 배열로 만드는 법을 몰라서 filter에서 계속 해맸음.
        - for in이라는 값을 사용해서 [key]로 출력해줌. 
- BackEnd
    - `2022-10-27`
        - `NODEJS에서 여러 자료를 await을 사용해서 넘겨주는 것이 힘들었음.`
        - select함수를 이용해서 속성만 빼오는 과정을 거침.
        - passport 라이브러리의 원리를 아직 이해하지 못 함.
