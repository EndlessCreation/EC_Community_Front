export type Token = {
  accessToken: string;
};

export type User = {
  id: number;
  year: number | null;
  name: string | null;
  email: string;
  skills: Array<string>;
  isActive: boolean;
  role: Array<string> | null; // 한글로 ex) 회장, 부회장, 총무, 인사부장, 프론트 리더, 백엔드 리더, ...
  status: 'auth' | 'wait' | 'login';
  isAdmin: boolean;
  isLeader: boolean;
  image: string;
};

export const testUser1: User = {
  id: 1,
  year: 28,
  name: '황인서',
  email: 'sjsjsj1246@gmail.com',
  skills: ['react', 'react-native', 'next', 'typescript'],
  isActive: true,
  role: ['회장'],
  status: 'login',
  isAdmin: true,
  isLeader: true,
  image: 'https://avatars.githubusercontent.com/u/24623403?v=4',
};

export const testUser2: User = {
  id: 2,
  year: 28,
  name: '김윤성',
  email: 'kysagoo@gmail.com',
  skills: ['express', 'nest', 'typescript', 'devOps'],
  isActive: true,
  role: ['인사부장'],
  status: 'login',
  isAdmin: true,
  isLeader: false,
  image: 'https://avatars.githubusercontent.com/u/77562357?v=4',
};

export const testUser3: User = {
  id: 3,
  year: 31,
  name: '이상준',
  email: 'lsj96412@gmail.com',
  skills: ['express', 'nest', 'typescript', 'devOps'],
  isActive: true,
  role: ['홍보부장'],
  status: 'login',
  isAdmin: true,
  isLeader: false,
  image: 'https://avatars.githubusercontent.com/u/66112027?v=4',
};

export const testUser4: User = {
  id: 4,
  year: 28,
  name: '조재영',
  email: 'jdyj1235@gmail.com',
  skills: ['express', 'nest', 'typescript', 'devOps'],
  isActive: true,
  role: ['재정부장'],
  status: 'login',
  isAdmin: true,
  isLeader: false,
  image: 'https://avatars.githubusercontent.com/u/41135099?v=4',
};

export const testUser5: User = {
  id: 5,
  year: 27,
  name: '김건훈',
  email: 'dnatuna123@gmail.com',
  skills: ['express', 'nest', 'typescript', 'devOps'],
  isActive: true,
  role: ['개발부장'],
  status: 'login',
  isAdmin: true,
  isLeader: true,
  image: 'https://avatars.githubusercontent.com/u/28949165?v=4',
};

export const testUser6: User = {
  id: 6,
  year: 28,
  name: '오정진',
  email: 'ojj991123@gmail.com',
  skills: ['react', 'next', 'typescript'],
  isActive: true,
  role: ['학술부장'],
  status: 'login',
  isAdmin: true,
  isLeader: false,
  image: 'https://avatars.githubusercontent.com/u/33178048?v=4',
};

export type Activity = {
  id: number;
  title: string;
  category: 'study' | 'competition' | 'advance';
  status: 'recruit' | 'progress' | 'finish';
  member: Array<User>;
  startDate: Date | null;
  endDate: Date | null;
  image: string | null;
  source: string | null;
  description: string | null;
  skills: Array<string>;
};

export const testActivity1: Activity = {
  id: 1,
  title: '모여런',
  category: 'competition',
  status: 'finish',
  member: [testUser1, testUser2],
  startDate: new Date('2021-09-12'),
  endDate: new Date('2021-11-12'),
  image:
    'https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png',
  source: 'https://github.com/MoyeoRun',
  description:
    'MoyeoRun은 실시간으로 같이 달릴 수 있는 모바일 앱 플랫폼입니다. 같은 공간에서 달리지 않아도 앱 서비스를 통해 함께 달릴 수 있도록 지원합니다.',
  skills: ['react', 'react-native', 'nest', 'docker', 'kafka', 'k8s', 'FCM'],
};

export const testActivity2: Activity = {
  id: 1,
  title: 'Upgle',
  category: 'competition',
  status: 'finish',
  member: [testUser1],
  startDate: new Date('2021-08-12'),
  endDate: new Date('2021-10-12'),
  image:
    'https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png',
  source: 'https://github.com/Jandy-SeoulTech/Jandy_Web_Front',
  description:
    'Upgle 은 웹 사이트 환경에서 자신이 잘하는 분야를 공유하는 공유자와 배우고 싶은 분야를 배우는 사람들이 실시간으로 인터렉션 할 수 있게 도와주는 사이트입니다.',
  skills: ['react', 'Redux', 'material-ui'],
};

export type Blog = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  tags: Array<string>;
  author: User;
  image: string | null;
};

export const testBlog1: Blog = {
  id: 1,
  title: 'Gatsby 테마로 블로그 만들기',
  content: `
평소 공부하며 깨달은 내용과 프로젝트를 하며 겪는 문제와 해결방법을 정리하고 싶어 블로그를 개설하게 됐습니다.
이 블로그는 Gatsby프레임워크로 개발되었으며 [zoomkoding-gatsby-blog](https://github.com/zoomKoding/zoomkoding-gatsby-blog)테마를 기반으로 커스텀 되었습니다.

첫 포스팅으로 테마를 이용해 블로그를 개설하는 방법을 작성해보겠습니다.

## 1. gatsby로 블로그를 만든 이유

가끔 개발을 하다보면 머리가 깨질 것 같이 아프곤 합니다. 뇌가 새로운 정보를 받아들이길 거부하는 느낌.. 뇌의 용량은 한정적이므로.. 습득한 정보를 압축하고 정리할 필요가 있었습니다.

처음엔 Jekyll을 사용하여 블로그를 만들었습니다. 사실 때깔이 뭐가 중요하겠냐만.. 저는 제 마음대로 블로그를 커스텀해보고 싶었습니다. 하지만 Jekyll은 루비로 작성되어 커스텀하기가 어려웠습니다.

그러다 React 기반의 정적 페이지 개발 프레임워크를 발견했습니다. 평소 리액트를 주력으로 사용하고 있기 때문에 바로 만들어 보기로 했습니다.

> 정적 웹사이트란.. HTML, CSS, JavaScript로만 구성된 웹사이트이며 바로 브라우저를 통해 보여질 수 있는 사이트입니다.
> 반대로 동적 웹사이트는 웹 어플리케이션을 통해 동적으로 생성된 페이지가 브라우저에 전달되어 보여지게 됩니다.
> 동적 웹사이트로 블로그를 만들 경우 따로 웹 어플리케이션을 실행할 서버가 필요하고 그 서버를 배포해야 하니 정적 웹사이트가 배포하기도 쉽고 속도가 빠릅니다.
> React도 npm run build를 통해 정적 파일을 만들수는 있지만 Gatsby에 비해 기능이 많이 없습니다.

## 2. Gatsby 테마 사용하기

Gatsby는 Jekyll과 같은 정적 사이트 개발 프레임워크입니다. 뷰는 React로 구성하고 GraphQL을 통해 데이터를 처리하며 SEO, Lazy-Loading 그외 많은 플러그인들이 있습니다.

### Gatsby 설치

먼저 gatsby를 설치해봅시다.

\`\`\`bash
npm install -g gatsby-cli
\`\`\`

### Gatsby 프로젝트 만들기

개츠비는 프로젝트를 생성할 때 테마를 적용할 수 있습니다.

저는 [zoomkoding-gatsby-blog](https://github.com/zoomKoding/zoomkoding-gatsby-blog)테마를 사용했습니다. git clone과 비슷한 것이라고 생각하면 될 것 같습니다.

[이곳](https://www.gatsbyjs.com/starters)에서 더 많은 테마를 볼 수 있습니다. 블로그 뿐만 아니라 다양한 주제의 사이트들이 있습니다.

\`\`\`bash
gatsby new [프로젝트 이름] [적용할 테마의 주소]
\`\`\`

## 3. Repository 만들기

![Untitled](https://hislogs.com/static/6d8b14491ba3d102760afda8280d820c/a242d/3-1.png)

먼저 깃허브에 Repogitory를 생성합니다.

![Untitled](https://hislogs.com/static/281f0805d3992a6ffca43463bbdfd2b2/f213e/3-2.png)

그리고 Gatsby 프로젝트 디렉토리에서 위 명령어를 입력해 저장소로 푸쉬합니다.

## 4. Gatsby Blog 커스텀하기

이제 복사해온 사이트의 정보를 자신에게 맞게 수정해주어야 하는데요. 이 부분은 테마 마다 상당히 다를 수 있습니다. 각자 구현한 방식이 다를 수 있기 때문입니다.

### package.json

먼저 프로젝트의 정보를 수정해줍니다.

![Untitled](https://hislogs.com/static/f8166169fa7fc1d8278ded4beb8c54f8/f21e7/4-1.png)

### gatsby-meta-config.js

Gatsby에서 사용하는 메타 데이터를 수정해줍니다. 테마 마다 다르겠지만 사이트 제목, 썸네일 주소, 깃허브 주소, 이메일, 포트폴리오 등등 기존에 써져있는 데이터를 자신에게 맞게 변경하거나 테마의 repository에 안내된 방법대로 수정해주시면 되겠습니다.

![Untitled](https://hislogs.com/static/38e7ba7c11c5f8264940baa6c9c84347/b3e51/4-2.png)

## 5. 포스팅하기

이부분도 테마별로 다르지만 보통 root 디렉토리에 blog 또는 content라는 디렉토리가 있을 겁니다.

![Untitled](https://hislogs.com/static/5125a0948813f95936b6c8b280348d61/2efce/5-1.png)

![Untitled](https://hislogs.com/static/0d063b74c18967393598deebd02b9ca6/62f93/5-2.png)

그곳에 형식에 맞게, 테마의 안내에 따라 마크다운으로 글을 작성해주시면 됩니다.

## 6. 로컬에서 실행해보기

먼저 로컬에서 잘 작동하는지 실행해봅시다.

\`\`\`bash
yarn gatsby develop
\`\`\`

만약 실행했을 때 이미지가 깨져있다거나 오작동이 있을 경우

\`\`\`bash
yarn gatsby clean
\`\`\`

위 명령어를 통해 빌드 파일을 지운 후 다시 실행해봅시다.

## 7. Github Pages로 배포하기

이 단계에서 가장 고생을 많이 했습니다. 저는 커스텀 도메인을 적용해야 했기에..

### github-pages 사용하기

\`\`\`bash
yarn add gh-pages
\`\`\`

github pages를 프로젝트에 설치해줍니다.

### 커스텀 도메인을 이용하고 싶을 때

![Untitled](https://hislogs.com/static/86f7c8f3de936749d9acecde2afd2594/1b19f/7-1.png)

![Untitled](https://hislogs.com/static/8d4637246c1c5d901f8a9128df8a3f9c/4255a/7-2.png)

DNS 세팅을 위와 같이 해줍니다.

![Untitled](https://hislogs.com/static/303c65848a114e2dfbfd7bad1bb5a2c6/1d8ec/7-3.png)

프로젝트 루트에 CNAME이라는 파일을 만들어 주고 커스텀 도메인의 주소를 넣습니다.

Package.json에 다음 명령어를 작성해줍니다.

\`\`\`json
"scripts": {
	...
	"predeploy": "gatsby build && cp CNAME ./public",
	"deploy": "gh-pages -d public",
	...
}
\`\`\`

배포해줍시다!

\`\`\`bash
yarn deploy
\`\`\`

![Untitled](https://hislogs.com/static/f9bc475714dd36ba75e7703b7ae2b636/0d0e4/7-4.png)

Enforce HTTPS를 활성화시켜 보안을 강화하세요!

repository settings에서 이런식으로 세팅이 되었다면 성공입니다!

> 배포라는 것이 원래 시간이 좀 걸립니다.. DNS 서버에 전파되는 시간이 걸리기 때문입니다. 그리고 사용자의 브라우저까지 도착하는데에도 시간이 걸리며 오류가 발생한 사이트를 배포했을 경우 그 오류까지 브라우저가 캐싱하여 사이트의 오류를 고쳐 다시 배포한다 해도 즉시 반영되지 않을 수도 있습니다.

### 커스텀 도메인이 없을 때

\`\`\`json
"predeploy": "gatsby build",
"deploy": "gh-pages -d public",
\`\`\`

![Untitled](https://hislogs.com/static/f9bc475714dd36ba75e7703b7ae2b636/0d0e4/7-4.png)

커스텀 도메인이 없을 경우는 깃허브에서 알아서 https://{username}.github.io/{repositoryname}의 주소로 배포될겁니다.

### Github Action을 통한 배포 자동화

블로그 저장소 Secrets에 비밀 키를 하나 만들어줍니다. 키 이름은 ACCESS_TOKEN으로 합니다. 값으로는 깃허브 개발자 설정에서 엑세스 토큰을 하나 만들어야 합니다.

![Untitled](https://hislogs.com/static/6f3a08419fe4c677d5a57562fb57fd6d/b8471/7-5.png)

![Untitled](https://hislogs.com/static/b736e88678cd31f22c5608329694772f/daf70/7-6.png)

그다음 블로그 저장소에서 Actions탭에 들어가 set up a workflow yourself를 눌러줍니다.

![Untitled](https://hislogs.com/static/bacd4018a4fc717622303a8a2aaab33c/b6e50/7-7.png)

내용에 다음을 적습니다.

\`\`\`yaml
name: Gatsby Publish
on:
  pull_request:
    branches:
      - main
    paths-ignore:
      - '**/README.md'
  push:
    branches:
      - main
    paths-ignore:
      - '**/README.md'
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: \${{ secrets.ACCESS_TOKEN }}
          deploy-branch: gh-pages
          skip-publish: false
\`\`\`

main에 푸쉬하거나 pr이 머지됐을 경우 자동으로 gh-pages를 통해 배포됩니다.

## 8. Netlify로 배포하기

> 처음엔 뭔가 gh-pages를 쓰면 되겠지 하고 썻지만 커스텀 도메인을 사용할 때 gh-pages는 적절하지 않다는 것을 깨달았습니다. 깃허브에서 배포해준 저의 사이트는 닉네임.github.io/저장소이름 입니다. 하지만 저희 도메인 설정은 CNAME으로 닉네임.github.io를 가리키고 있습니다. 그렇다는 것은 추측하건데 깃허브에 nginx같은 WS가 있어서 외부 도메인을 통해 주소 닉네임.github.io으로 왔을 때 닉네임.github.io/저장소이름 으로 리다이렉션 시켜주는 것 같습니다. 그러니 gh-pages로 배포를 할 때마다 사이트가 5분~10분정도 접속이 안되는 것이었습니다.. 저는 gh-pages를 포기하고 netlify를 사용하기로 했습니다.

### 회원가입

[https://netlify.com](https://app.netlify.com/sites/hislogs/settings/deploys) 여기서 회원가입을 합니다.

### netlify CLI 설치

\`\`\`bash
npm install -g netlify-cli
\`\`\`

netlify cli를 전역으로 설치해줍니다.

### 배포

편의를 위해 프로젝트 루트에 netlify 배포용 설정파일을 만듭니다.

netlify.toml

\`\`\`yaml
[build]
  publish = "public"
  command = "npm run build"
[build.environment]
  NODE_VERSION = "14"
  NPM_VERSION = "7.6.0"
\`\`\`

\`\`\`bash
yarn build
netlify deploy --prod
\`\`\`

프로젝트 디렉토리에서 명령어를 실행해줍니다.

![Untitled](https://hislogs.com/static/e49997940acb0ce5d1e2401f9e908ffc/898f6/8-1.png)

콘솔에 안내된대로 배포를 해주면 https://{입력한 사이트 이름}.netlify.app에 배포가 됩니다.

### 도메인 설정

![Untitled](https://hislogs.com/static/79c4242d73195351ccdc555d8be91577/58213/8-2.png)

다음과 같이 CNAME을 넷리파이에서 준 주소로 입력합니다.

netlify 사이트로 이동해서 방금 배포한 사이트 설정으로 이동합니다.

Custom domains에 Add custom domain을 누릅니다.

![Untitled](https://hislogs.com/static/e3c0428d657893770ede127633fa1de9/82c1e/8-3.png)

www.도메인이름을 입력하고 Add domain을 누릅니다.

![Untitled](https://hislogs.com/static/3b593379e5966c8bb816f5d13b60f6cc/41045/8-4.png)

위와 같이 뜬다면 성공했습니다.

![Untitled](https://hislogs.com/static/ad7b522662281b3db4afce864d8a43e0/2093e/8-5.png)

또한 아래의 HTTPS에서 인증서를 받을 수 있습니다. 하단 왼쪽의 버튼을 누르세요

### 배포 자동화

![Untitled](https://hislogs.com/static/e08fb2ecd1160f90f5f2e1462283773f/daf70/8-6.png)

Build & deploy 탭에서 배포 설정을 할 수 있습니다.

Link site to Git 버튼을 눌러 저장소와 연동하시고 배포할 branch는 작업하는 branch로 해주세요. 저는 main에 했습니다.

Build Command는 반드시 CI=false npm run build로 해주시고 배포 폴더는 public입니다.

이렇게 설정해두면 main에 푸쉬하거나 pr할 때 자동으로 다시 배포해줍니다.

## 9. 구글 서치 콘솔 등록

[구글서치콘솔](https://search.google.com/search-console/about?hl=ko)에 접속합니다. 소유권을 인증하면 등록이 완료됩니다. 사이트의 데이터를 처리하는 데에 시간이 좀 소요됩니다.

## 10. 구글 애널리틱스 등록

구글 [애널리틱스에](https://analytics.google.com/) 접속합니다.

![Untitled](https://hislogs.com/static/4d7355ac38badce1d8d95f109bbd79a2/43142/10-1.png)

왼쪽 하단 설정 버튼을 누른 뒤 왼쪽의 계정 만들기를 누릅니다. 계정이름은 마음대로 하셔도 됩니다.

계정을 만든 뒤 오른쪽의 속성에서 데이터 스트림을 만듭니다.

스트림 URL은 사이트의 주소로 합니다. 이제 만들어진 G-로 시작하는 태그를 이용해 사이트와 연결해줄겁니다.

gatsby 플러그인을 설치해야 합니다.

\`\`\`bash
yarn add gatsby-plugin-gtag
\`\`\`

gatsby-config.js 에 다음 설정을 추가해줍니다.

\`\`\`bash
{
      resolve: \`gatsby-plugin-gtag\`,
      options: {
        trackingId: {발급받은 측정ID},
        head: false,
        anonymize: true,
      },
    },
\`\`\`

이제 다시 배포하면 사이트의 통계를 볼 수 있습니다.

---
궁금하신 점 있으시면 댓글 달아주세요!

  `,
  createdAt: new Date('2021-04-12'),
  tags: ['react', 'gatsby'],
  author: testUser1,
  image:
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80',
};

export const testBlog2: Blog = {
  id: 2,
  title: 'HTTP에 대해 알아봅시다',
  content: `
  # HTTP에 대해 알아봅시다

  > 구글신의 도움을 받아 작성된 글입니다. 참고한 자료 및 내용 인용 출처는 맨 아래에 기재해뒀습니다.
  
  ## 1. HTTP의 변화
  
  HTTP는 웹상에서 Client와 Server 간 통신을 위한 Protocol입니다. 월드 와이드 웹에 내제되어있고, HTTP/0.9를 시작으로 HTTP/2까지 다양한 버전이 출시됐습니다. 대표적인 1.1 버전과 2 버전을 깊게 알아보고 나머지 버전들은 어떤 것들이었는지만 알아보겠습니다.
  
  ### 1-1. HTTP/0.9
  
  HTTP의 초기 버전입니다. 처음에는 버전 정보가 없었으나 차후 구분을 위해 0.9라고 불리게 됐습니다. 굉장히 단순하여 리소스에 대해 접근 가능한 메서드는 \`GET\`이 유일했습니다. HTTP 헤더가 없어 HTML 파일만 전송할 수 있었으며 다른 유형의 문서는 전송할 수 없었습니다. 또한 상태 혹은 오류 코드가 없었기 때문에 문제의 상황 시 해당 파일 내부에 문제에 대한 설명을 포함해 보내졌다고 합니다.
  
  ### 1-2. HTTP/1.0
  
  HTTP/0.9보다 브라우저와 서버 모두 융통성을 가지도록 확장됐습니다. 요청에서는 버전 정보가 붙어 전송되기 시작했고, 응답에선 상태 코드가 응답값 시작 부분에 포함되어 전송되기 시작했습니다. HTTP 해더가 요청과 응답 두 곳에 도입됐고, 헤더의 'Content-Type'으로 메타데이터 전송이 가능해졌습니다. 메서스도 \`POST\`, \`HEAD\`가 추가됐습니다.
  
  \`\`\`jsx
  GET /mypage.html HTTP/1.0
  User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)
  
  200 OK
  Date: Tue, 15 Nov 1994 08:12:31 GMT
  Server: CERN/3.0 libwww/2.17
  Content-Type: text/html
  <HTML> 
  A page with an image
    <IMG SRC="/myimage.gif">
  </HTML>
  \`\`\`
  
  ### 1-3. HTTP/1.1 - 표준 프로토콜
  
  1.0 버전이 나온지 몇 달 안되서 1997년 초 HTTP의 첫 번째 표준 버전인 1.1 버전이 공개됐습니다. 기존의 모호했던 부분들을 개선했고, 통신의 비용을 낮출 수 있는 부분들이 추가됐습니다.
  
  > 아래에 작성한 것들보다 더 많은 것들이 추가됐으니 궁금하신 분들은 [MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)을 참고하시기 바랍니다.
  
  - \`OPTION\`, \`PUT\`, \`DELETE\`, \`TRACE\`가 추가됐습니다.
  - 커넥션이 재사용될 수 있게 됐습니다. 탐색된 단일 원본 문서 내로 임베드된 리소스들을 디스플레이하기 위해, 이미 사용된 커넥션을 다시 사용하여 시간을 절약합니다.
  - 파이프라이닝(pipelining)을 추가했습니다. 첫 번째 요청에 대한 응답이 완전히 전송되기 이전에 두 번째 요청 전송이 가능해졌습니다.
  
  ![Untitled](https://user-images.githubusercontent.com/28949165/114299918-b984ff00-9af8-11eb-9863-5f229dbaa80f.png)
  
  [출처] - MDN
  
  HTTP/1.0에서는 \`단기 커넥션\`(\`Short-lived connections\`)을 이용했습니다. \`단기 커넥션\`은 각각의 HTTP 요청마다 TCP handshake가 실행됩니다. TCP 커넥션은 지속적으로 연결된 상태에서 통신이 지속됐을 때 효율적으로 작동합니다. 이런 TCP의 효율적인 특성을 사용하지 않는 \`단기 커넥션\`은 성능이 떨어질 수 밖에 없습니다.
  
  그래서 HTTP/1.1에는 \`지속적인 커넥션\`(\`Persistent connection\`)이 추가됐습니다. 일정 시간 동안 커넥션을 열어놓고 그 시간 동안 HTTP 요청을 보내는 방식입니다. TCP 커넥션은 항상 유지되는 것이 아니라 최소한 얼마나 열려있어야할지 설정해줘야 합니다. \`지속적인 커넥션\`은 TCP handshake 비용이 크게 줄어들어서 이전 방식보다 효율적입니다. 하지만 이 방식에도 아래와 같은 문제가 존재합니다.
  
  - 요청이 들어오지 않는 상황에도 서버 리소스를 소비합니다.
  - DoS Attack을 당할 수 있습니다.
  - 기본적으로 하나의 요청 당 하나의 응답 밖에 할 수 없습니다. 즉, 동시 전송이 불가능합니다.
  
  이 문제들 중 특히 세 번째 문제를 해결하기 위해 \`HTTP Pipelining\` 기술이 추가됐습니다. \`HTTP Pipelining\`은 한 번의 커넥션을 통해 여러 개의 요청과 응답을 받을 수 있는 기술을 의미합니다. 이론적으로는 커넥션의 지연을 피할 수 있었지만 \`파이프라이닝\`을 정확히 구현해내기 복잡한 문제 때문에 현실은 그렇지 못합니다. 전송 중인 리소스의 크기, RTT, 대역폭의 능력은 파이프라인의 성능에 직접적인 영향을 미칩니다. 따라서 실제 수치 비교해보면 미미한 수준의 향상을 가져옵니다.
  
  또한 응답의 중요도에 따라 응답되는 것이 아니기 때문에 덜 중요한 응답에 중요한 응답이 밀려 페이지 레이아웃 중에 큰 영향을 미칠 수 있습니다. 즉, \`HTTP HOL\` 문제가 생깁니다. 중요한 내용이니 \`HTTP HOL\`에 대해서 간단하게 알아보겠습니다.
  
  **HTTP HOL**
  
  하나의 TCP 연결에서 3개의 이미지를 얻으려고 하는 경우 HTTP의 요청 순서는 다음과 같습니다.
  
  \`\`\`
  | --- a.png --- |
                  | --- b.png --- |
                                  | --- c.png --- |
  \`\`\`
  
  a.png, b.png, c.png 순서대로 사진을 요청하고 서버에서 처리되는 대로 보낸 요청의 수 만큼 응답을 받습니다. 이해가 잘 안가신다면 위에 있는 세 번째 사진을 보시면 이해가 잘 가실겁니다. 그런데 여기서 첫 번째로 요청을 한 a.png의 파일이 너무 크거나 요청이나 응답에서 패킷 유실이 발생하는 경우 응답처리가 늦어지면 아래와 같은 현상이 발생합니다.
  
  \`\`\`
  | ------------------ a.png ----------------- |
                                               | --- b.png --- |
                                                               | --- c.png --- |
  \`\`\`
  
  이런 상황이 발생한다면 a.png의 응답이 처리되기 전까지 b.png와 c.png는 대기를 하게 됩니다. 이와 같은 현상을 \`HTTP의 Head of Line Blocking\`(\`HTTP HOL\`)이라고 부르며 이는 \`파이프라이닝\`뿐만 아니라 HTTP/1.1의 큰 문제점 중 하나입니다. 이런 문제들을 해결하기 위해 [Domain Sharding](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding), [Image Sprites](https://www.w3schools.com/css/css_image_sprites.asp) 등의 기술도 도입하지만([*자세한 설명은 여길 클릭하세요*](https://hpbn.co/optimizing-application-delivery/#optimizing-for-http1x)) 결국 근본적으로 문제를 해결하는 방안이 되지는 못했습니다.
  
  ### 1-4. HTTP/2의 등장
  
  2010년, Google은 \`SPDY\` 프로토콜을 구현합니다. \`SPDY\`는 HTTP 헤더를 단순화하여 압축하여 전송하고, 기존에 보냈던 HTTP 헤더와 같은 내용의 헤더가 재전송될 경우 해더는 빼고 전송합니다. 이후 다른 내용의 헤더가 전송될 경우 이 다른 부분만 압축하여 전송을 합니다.(*[다른 기술들도 더 있습니다](https://ko.wikipedia.org/wiki/SPDY)!*) SPDY는 뛰어난 성능을 보여줬고, 이후 HTTP/2의 초안에 \`SPDY\` 규격이 참고되게 됩니다.
  
  이제부터 HTTP/2의 큰 특징들을 설명드리겠습니다.
  
  **Binary protocol**
  
  ![Untitled 1](https://user-images.githubusercontent.com/28949165/114299911-b5f17800-9af8-11eb-856b-134530795e3e.png)
  
  [출처] - Google Developers / High Performance Browser Networking(O'Reilly, Ilya Grigorik)
  
  이제 \`바이너리 프로토콜\`을 사용합니다. 기존의 \`텍스트 프로토콜\`와는 전혀 다릅니다! 기존에 통합되어 적혀있던 텍스트 데이터를 헤더 부분과 데이터 부분으로 나누고 이를 바이너리로 인코딩하여 전송합니다. HTTP의 체계(Methods, Headers, [verbs](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods) 등등)는 바뀌지 않지만, 클라이언트와 서버에서 서로를 이해하기 위해서는 \`바이너리 인코딩\` 메커니즘이 필요해졌습니다.
  
  **Stream, Message & Frame**
  
  ![Untitled 2](https://user-images.githubusercontent.com/28949165/114299913-b853d200-9af8-11eb-8adb-5f435707410f.png)
  
  [출처] - Google Developers / High Performance Browser Networking(O'Reilly, Ilya Grigorik)
  
  \`Binary Framing\` 매커니즘이 도입되면서 클라이언트와 서버의 교환 방식이 바뀌었습니다. 그에 따라 새로운 용어들이 등장했는데 앞으로의 이해를 돕기 위해 간단하게 설명하겠습니다!
  
  - \`Stream\` : 커넥션 내에서 전달되는 데이터들의 흐름입니다. 하나 이상의 메세지가 전달될 수 있습니다.
  - \`Message\` : 요청 또는 응답의 단위입니다. 여러 개의 프레임들로 구성되어 있습니다.
  - \`Frame\` : HTTP/2 통신의 최소 단위입니다.
  
  위 그림을 보시면 한 번의 커넥션에 N개의 스트림이 전송되는 것을 볼 수 있습니다. 한 번의 커넥션에서 요청이나 응답을 여러 개 보낼 수 있는데 이때의 숫자 제한은 없습니다. 더불어 각 스트림에는 [고유의 식별자와 우선순위 정보](https://developers.google.com/web/fundamentals/performance/http2#%EC%8A%A4%ED%8A%B8%EB%A6%BC_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84_%EC%A7%80%EC%A0%95)가 생겼습니다. 따라서 우선 순위에 따라서 스트림이 전송되고 고유의 식별자를 통해 이 프레임들을 다시 조립할 수 있습니다.
  
  **Multiplexing**
  
  HTTP/1.x은  문제점을 \`Domain Sharding\`으로 해결했었습니다. 이제는 \`Multiplexing\`을 통해 여러 개의 요청이나 응답을 한 번의 커넥션에 보낼 수 있습니다. 위에서 설명했듯이, 이 과정에서 클라이언트와 서버는 HTTP 메세지를 독립된 프레임으로 세분화하고, 우선순위에 따라 프레임을 인터리빙한 다음 전송합니다. 받는 쪽에서는 고유의 식별자를 통해 이 프레임들을 다시 조립합니다. 아래 그림을 참고하시면 이해하기 편하실 겁니다.
  
  ![Untitled 3](https://user-images.githubusercontent.com/28949165/114299915-b8ec6880-9af8-11eb-90ea-386926402ca9.png)
  
  [출처] - Google Developers / High Performance Browser Networking(O'Reilly, Ilya Grigorik)
  
  이 기술을 통해 HTTP 통신의 성능 향상에 엄청난 영향을 미쳤습니다. 더불어 HTTP/1.x 기술에서 사용하던 \`Image Sprites\`나 \`Domain Sharding\`과 같은 기술들을 더 이상 사용하지 않아도 됩니다. 더불어 우선순위 별로 전송되기 때문에 페이지 로딩이 효율적으로 바뀌게 됩니다.
  
  **Server Push**
  
  HTTP/2에는 \`서버 푸시\`라는 강력한 기능도 추가됐습니다. HTTP/1.x에서는 클라이언트에서 요청을 하나를 보내면 그에 대한 응답을 단 하나만 보낼 수 있었습니다. HTTP/2부터 \`서버 푸시\`기능이 추가되면서, 클라이언트에서 원래 요청한 응답 뿐만 아니라 앞으로 클라이언트에서 요청할 추가적인 리소스들을 미리 응답해줍니다. 이는 \`PUSH_PROMISE\` 프레임을 통해 구현된 기술이고 이 또한 중요한 기술이니 [여기](https://developers.google.com/web/fundamentals/performance/http2#push_promise%EC%9D%98_%EA%B8%B0%EC%B4%88)에서 자세히 읽어보시길 권합니다.
  
  쉽계 예를 들어 설명해보자면 브라우저가 서버에 index.html 하나를 요청합니다. 이 HTML 안에는 CSS, img, js 등 많은 추가 리소스들이 필요하다는 것이 적혀있습니다. HTML/1.x 통신인 경우 클라이언트는 HTML을 응답받은 뒤 HTML 문서를 해석해 필요한 리소스들 다시 요청합니다. HTTP/2 통신부터는 서버가 클라이언트에게 어떤 리소스들을 보내야하는지 미리 알고 있어, HTML을 전송하면서 동시에 HTML문서에 포함된 리소스들을 같이 푸시해줍니다. 
  
  **Header Compression**
  
  ![Untitled 4](https://user-images.githubusercontent.com/28949165/114299916-b8ec6880-9af8-11eb-9e78-1fd9602fe49e.png)
  
  HTTP 헤더에는 전송되는 리소스의 속성이 작성되어 있습니다. HTTP/1.x의 경우 이러한 메타데이터들은 항상 텍스트로 전송됐고 이는 전송 당 500~800 바이트의 [오버헤드](https://ko.wikipedia.org/wiki/%EC%98%A4%EB%B2%84%ED%97%A4%EB%93%9C)가 추가됐습니다. HTTP/2에서는 이런 오버헤드를 줄이고자 \`HPACK 압축\`을 통해 요청 및 응답 헤더 메타데이터를 압축합니다. \`HPACK\`에 대해 간단히 설명해보자면
  
  - 이전에 보낸 헤더 필드의 색인 목록을 서버가 유지하고 업데이트합니다. 이를 사용해 중복되는 헤더 필드를 제외한 헤더 필드만 전송합니다. 쉽게 말해 이전 헤더에서 달라진 값만 전송합니다.
  - 데이터를 전송하기 전에 [Huffman 코드](https://en.wikipedia.org/wiki/Huffman_coding)를 통해 인코딩합니다.
  
  위의 기술들 뿐만 아니라 [흐름 제어](https://developers.google.com/web/fundamentals/performance/http2#%ED%9D%90%EB%A6%84_%EC%A0%9C%EC%96%B4), [One connection per origin](https://developers.google.com/web/fundamentals/performance/http2#%EC%B6%9C%EC%B2%98%EB%8B%B9_%ED%95%98%EB%82%98%EC%9D%98_%EC%97%B0%EA%B2%B0) 등의 기술로 기존의 HTTP/1.x 보다 안정적이고 효율적인 TCP 통신을 제공합니다. 이는 [여기](https://www.httpvshttps.com/)에서 직접 확인해볼 수 있습니다.
  
  ---
  
  [출처]
  
  [https://developers.google.com/web/fundamentals/performance/http2?hl=ko](https://developers.google.com/web/fundamentals/performance/http2?hl=ko)
  
  [https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  
  [https://falsy.me/http의-버전-별-차이에-대해-알아보고-ubuntu-nginx에-http-2를-적용해/](https://falsy.me/http%EC%9D%98-%EB%B2%84%EC%A0%84-%EB%B3%84-%EC%B0%A8%EC%9D%B4%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B3%A0-ubuntu-nginx%EC%97%90-http-2%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4/)
  
  [https://www.popit.kr/나만-모르고-있던-http2/](https://www.popit.kr/%EB%82%98%EB%A7%8C-%EB%AA%A8%EB%A5%B4%EA%B3%A0-%EC%9E%88%EB%8D%98-http2/)
  `,
  createdAt: new Date('2021-04-12'),
  tags: ['react', 'gatsby'],
  author: testUser5,
  image:
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80',
};
