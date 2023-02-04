---
title: HTTP에 대해 알아봅시다
createdAt: 2021-04-12
tags: ['network', 'http']
author:
  {
    name: 김건훈,
    email: dnatuna123@gmail.com,
    image: https://avatars.githubusercontent.com/u/28949165?v=4,
  }
image: https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80
---

# HTTP에 대해 알아봅시다

> 구글신의 도움을 받아 작성된 글입니다. 참고한 자료 및 내용 인용 출처는 맨 아래에 기재해뒀습니다.

## 1. HTTP의 변화

HTTP는 웹상에서 Client와 Server 간 통신을 위한 Protocol입니다. 월드 와이드 웹에 내제되어있고, HTTP/0.9를 시작으로 HTTP/2까지 다양한 버전이 출시됐습니다. 대표적인 1.1 버전과 2 버전을 깊게 알아보고 나머지 버전들은 어떤 것들이었는지만 알아보겠습니다.

### 1-1. HTTP/0.9

HTTP의 초기 버전입니다. 처음에는 버전 정보가 없었으나 차후 구분을 위해 0.9라고 불리게 됐습니다. 굉장히 단순하여 리소스에 대해 접근 가능한 메서드는 `GET`이 유일했습니다. HTTP 헤더가 없어 HTML 파일만 전송할 수 있었으며 다른 유형의 문서는 전송할 수 없었습니다. 또한 상태 혹은 오류 코드가 없었기 때문에 문제의 상황 시 해당 파일 내부에 문제에 대한 설명을 포함해 보내졌다고 합니다.

### 1-2. HTTP/1.0

HTTP/0.9보다 브라우저와 서버 모두 융통성을 가지도록 확장됐습니다. 요청에서는 버전 정보가 붙어 전송되기 시작했고, 응답에선 상태 코드가 응답값 시작 부분에 포함되어 전송되기 시작했습니다. HTTP 해더가 요청과 응답 두 곳에 도입됐고, 헤더의 'Content-Type'으로 메타데이터 전송이 가능해졌습니다. 메서스도 `POST`, `HEAD`가 추가됐습니다.

```jsx
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
```

### 1-3. HTTP/1.1 - 표준 프로토콜

1.0 버전이 나온지 몇 달 안되서 1997년 초 HTTP의 첫 번째 표준 버전인 1.1 버전이 공개됐습니다. 기존의 모호했던 부분들을 개선했고, 통신의 비용을 낮출 수 있는 부분들이 추가됐습니다.

> 아래에 작성한 것들보다 더 많은 것들이 추가됐으니 궁금하신 분들은 [MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)을 참고하시기 바랍니다.

- `OPTION`, `PUT`, `DELETE`, `TRACE`가 추가됐습니다.
- 커넥션이 재사용될 수 있게 됐습니다. 탐색된 단일 원본 문서 내로 임베드된 리소스들을 디스플레이하기 위해, 이미 사용된 커넥션을 다시 사용하여 시간을 절약합니다.
- 파이프라이닝(pipelining)을 추가했습니다. 첫 번째 요청에 대한 응답이 완전히 전송되기 이전에 두 번째 요청 전송이 가능해졌습니다.

![Untitled](https://user-images.githubusercontent.com/28949165/114299918-b984ff00-9af8-11eb-9863-5f229dbaa80f.png)

[출처] - MDN

HTTP/1.0에서는 `단기 커넥션`(`Short-lived connections`)을 이용했습니다. `단기 커넥션`은 각각의 HTTP 요청마다 TCP handshake가 실행됩니다. TCP 커넥션은 지속적으로 연결된 상태에서 통신이 지속됐을 때 효율적으로 작동합니다. 이런 TCP의 효율적인 특성을 사용하지 않는 `단기 커넥션`은 성능이 떨어질 수 밖에 없습니다.

그래서 HTTP/1.1에는 `지속적인 커넥션`(`Persistent connection`)이 추가됐습니다. 일정 시간 동안 커넥션을 열어놓고 그 시간 동안 HTTP 요청을 보내는 방식입니다. TCP 커넥션은 항상 유지되는 것이 아니라 최소한 얼마나 열려있어야할지 설정해줘야 합니다. `지속적인 커넥션`은 TCP handshake 비용이 크게 줄어들어서 이전 방식보다 효율적입니다. 하지만 이 방식에도 아래와 같은 문제가 존재합니다.

- 요청이 들어오지 않는 상황에도 서버 리소스를 소비합니다.
- DoS Attack을 당할 수 있습니다.
- 기본적으로 하나의 요청 당 하나의 응답 밖에 할 수 없습니다. 즉, 동시 전송이 불가능합니다.

이 문제들 중 특히 세 번째 문제를 해결하기 위해 `HTTP Pipelining` 기술이 추가됐습니다. `HTTP Pipelining`은 한 번의 커넥션을 통해 여러 개의 요청과 응답을 받을 수 있는 기술을 의미합니다. 이론적으로는 커넥션의 지연을 피할 수 있었지만 `파이프라이닝`을 정확히 구현해내기 복잡한 문제 때문에 현실은 그렇지 못합니다. 전송 중인 리소스의 크기, RTT, 대역폭의 능력은 파이프라인의 성능에 직접적인 영향을 미칩니다. 따라서 실제 수치 비교해보면 미미한 수준의 향상을 가져옵니다.

또한 응답의 중요도에 따라 응답되는 것이 아니기 때문에 덜 중요한 응답에 중요한 응답이 밀려 페이지 레이아웃 중에 큰 영향을 미칠 수 있습니다. 즉, `HTTP HOL` 문제가 생깁니다. 중요한 내용이니 `HTTP HOL`에 대해서 간단하게 알아보겠습니다.

**HTTP HOL**

하나의 TCP 연결에서 3개의 이미지를 얻으려고 하는 경우 HTTP의 요청 순서는 다음과 같습니다.

```
| --- a.png --- |
                | --- b.png --- |
                                | --- c.png --- |
```

a.png, b.png, c.png 순서대로 사진을 요청하고 서버에서 처리되는 대로 보낸 요청의 수 만큼 응답을 받습니다. 이해가 잘 안가신다면 위에 있는 세 번째 사진을 보시면 이해가 잘 가실겁니다. 그런데 여기서 첫 번째로 요청을 한 a.png의 파일이 너무 크거나 요청이나 응답에서 패킷 유실이 발생하는 경우 응답처리가 늦어지면 아래와 같은 현상이 발생합니다.

```
| ------------------ a.png ----------------- |
                                             | --- b.png --- |
                                                             | --- c.png --- |
```

이런 상황이 발생한다면 a.png의 응답이 처리되기 전까지 b.png와 c.png는 대기를 하게 됩니다. 이와 같은 현상을 `HTTP의 Head of Line Blocking`(`HTTP HOL`)이라고 부르며 이는 `파이프라이닝`뿐만 아니라 HTTP/1.1의 큰 문제점 중 하나입니다. 이런 문제들을 해결하기 위해 [Domain Sharding](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding), [Image Sprites](https://www.w3schools.com/css/css_image_sprites.asp) 등의 기술도 도입하지만([_자세한 설명은 여길 클릭하세요_](https://hpbn.co/optimizing-application-delivery/#optimizing-for-http1x)) 결국 근본적으로 문제를 해결하는 방안이 되지는 못했습니다.

### 1-4. HTTP/2의 등장

2010년, Google은 `SPDY` 프로토콜을 구현합니다. `SPDY`는 HTTP 헤더를 단순화하여 압축하여 전송하고, 기존에 보냈던 HTTP 헤더와 같은 내용의 헤더가 재전송될 경우 해더는 빼고 전송합니다. 이후 다른 내용의 헤더가 전송될 경우 이 다른 부분만 압축하여 전송을 합니다.(_[다른 기술들도 더 있습니다](https://ko.wikipedia.org/wiki/SPDY)!_) SPDY는 뛰어난 성능을 보여줬고, 이후 HTTP/2의 초안에 `SPDY` 규격이 참고되게 됩니다.

이제부터 HTTP/2의 큰 특징들을 설명드리겠습니다.

**Binary protocol**

![Untitled 1](https://user-images.githubusercontent.com/28949165/114299911-b5f17800-9af8-11eb-856b-134530795e3e.png)

[출처] - Google Developers / High Performance Browser Networking(O'Reilly, Ilya Grigorik)

이제 `바이너리 프로토콜`을 사용합니다. 기존의 `텍스트 프로토콜`와는 전혀 다릅니다! 기존에 통합되어 적혀있던 텍스트 데이터를 헤더 부분과 데이터 부분으로 나누고 이를 바이너리로 인코딩하여 전송합니다. HTTP의 체계(Methods, Headers, [verbs](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods) 등등)는 바뀌지 않지만, 클라이언트와 서버에서 서로를 이해하기 위해서는 `바이너리 인코딩` 메커니즘이 필요해졌습니다.

**Stream, Message & Frame**

![Untitled 2](https://user-images.githubusercontent.com/28949165/114299913-b853d200-9af8-11eb-8adb-5f435707410f.png)

[출처] - Google Developers / High Performance Browser Networking(O'Reilly, Ilya Grigorik)

`Binary Framing` 매커니즘이 도입되면서 클라이언트와 서버의 교환 방식이 바뀌었습니다. 그에 따라 새로운 용어들이 등장했는데 앞으로의 이해를 돕기 위해 간단하게 설명하겠습니다!

- `Stream` : 커넥션 내에서 전달되는 데이터들의 흐름입니다. 하나 이상의 메세지가 전달될 수 있습니다.
- `Message` : 요청 또는 응답의 단위입니다. 여러 개의 프레임들로 구성되어 있습니다.
- `Frame` : HTTP/2 통신의 최소 단위입니다.

위 그림을 보시면 한 번의 커넥션에 N개의 스트림이 전송되는 것을 볼 수 있습니다. 한 번의 커넥션에서 요청이나 응답을 여러 개 보낼 수 있는데 이때의 숫자 제한은 없습니다. 더불어 각 스트림에는 [고유의 식별자와 우선순위 정보](https://developers.google.com/web/fundamentals/performance/http2#%EC%8A%A4%ED%8A%B8%EB%A6%BC_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84_%EC%A7%80%EC%A0%95)가 생겼습니다. 따라서 우선 순위에 따라서 스트림이 전송되고 고유의 식별자를 통해 이 프레임들을 다시 조립할 수 있습니다.

**Multiplexing**

HTTP/1.x은 문제점을 `Domain Sharding`으로 해결했었습니다. 이제는 `Multiplexing`을 통해 여러 개의 요청이나 응답을 한 번의 커넥션에 보낼 수 있습니다. 위에서 설명했듯이, 이 과정에서 클라이언트와 서버는 HTTP 메세지를 독립된 프레임으로 세분화하고, 우선순위에 따라 프레임을 인터리빙한 다음 전송합니다. 받는 쪽에서는 고유의 식별자를 통해 이 프레임들을 다시 조립합니다. 아래 그림을 참고하시면 이해하기 편하실 겁니다.

![Untitled 3](https://user-images.githubusercontent.com/28949165/114299915-b8ec6880-9af8-11eb-90ea-386926402ca9.png)

[출처] - Google Developers / High Performance Browser Networking(O'Reilly, Ilya Grigorik)

이 기술을 통해 HTTP 통신의 성능 향상에 엄청난 영향을 미쳤습니다. 더불어 HTTP/1.x 기술에서 사용하던 `Image Sprites`나 `Domain Sharding`과 같은 기술들을 더 이상 사용하지 않아도 됩니다. 더불어 우선순위 별로 전송되기 때문에 페이지 로딩이 효율적으로 바뀌게 됩니다.

**Server Push**

HTTP/2에는 `서버 푸시`라는 강력한 기능도 추가됐습니다. HTTP/1.x에서는 클라이언트에서 요청을 하나를 보내면 그에 대한 응답을 단 하나만 보낼 수 있었습니다. HTTP/2부터 `서버 푸시`기능이 추가되면서, 클라이언트에서 원래 요청한 응답 뿐만 아니라 앞으로 클라이언트에서 요청할 추가적인 리소스들을 미리 응답해줍니다. 이는 `PUSH_PROMISE` 프레임을 통해 구현된 기술이고 이 또한 중요한 기술이니 [여기](https://developers.google.com/web/fundamentals/performance/http2#push_promise%EC%9D%98_%EA%B8%B0%EC%B4%88)에서 자세히 읽어보시길 권합니다.

쉽계 예를 들어 설명해보자면 브라우저가 서버에 index.html 하나를 요청합니다. 이 HTML 안에는 CSS, img, js 등 많은 추가 리소스들이 필요하다는 것이 적혀있습니다. HTML/1.x 통신인 경우 클라이언트는 HTML을 응답받은 뒤 HTML 문서를 해석해 필요한 리소스들 다시 요청합니다. HTTP/2 통신부터는 서버가 클라이언트에게 어떤 리소스들을 보내야하는지 미리 알고 있어, HTML을 전송하면서 동시에 HTML문서에 포함된 리소스들을 같이 푸시해줍니다.

**Header Compression**

![Untitled 4](https://user-images.githubusercontent.com/28949165/114299916-b8ec6880-9af8-11eb-9e78-1fd9602fe49e.png)

HTTP 헤더에는 전송되는 리소스의 속성이 작성되어 있습니다. HTTP/1.x의 경우 이러한 메타데이터들은 항상 텍스트로 전송됐고 이는 전송 당 500~800 바이트의 [오버헤드](https://ko.wikipedia.org/wiki/%EC%98%A4%EB%B2%84%ED%97%A4%EB%93%9C)가 추가됐습니다. HTTP/2에서는 이런 오버헤드를 줄이고자 `HPACK 압축`을 통해 요청 및 응답 헤더 메타데이터를 압축합니다. `HPACK`에 대해 간단히 설명해보자면

- 이전에 보낸 헤더 필드의 색인 목록을 서버가 유지하고 업데이트합니다. 이를 사용해 중복되는 헤더 필드를 제외한 헤더 필드만 전송합니다. 쉽게 말해 이전 헤더에서 달라진 값만 전송합니다.
- 데이터를 전송하기 전에 [Huffman 코드](https://en.wikipedia.org/wiki/Huffman_coding)를 통해 인코딩합니다.

위의 기술들 뿐만 아니라 [흐름 제어](https://developers.google.com/web/fundamentals/performance/http2#%ED%9D%90%EB%A6%84_%EC%A0%9C%EC%96%B4), [One connection per origin](https://developers.google.com/web/fundamentals/performance/http2#%EC%B6%9C%EC%B2%98%EB%8B%B9_%ED%95%98%EB%82%98%EC%9D%98_%EC%97%B0%EA%B2%B0) 등의 기술로 기존의 HTTP/1.x 보다 안정적이고 효율적인 TCP 통신을 제공합니다. 이는 [여기](https://www.httpvshttps.com/)에서 직접 확인해볼 수 있습니다.

---

[출처]

[https://developers.google.com/web/fundamentals/performance/http2?hl=ko](https://developers.google.com/web/fundamentals/performance/http2?hl=ko)

[https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)

[https://falsy.me/http의-버전-별-차이에-대해-알아보고-ubuntu-nginx에-http-2를-적용해/](https://falsy.me/http%EC%9D%98-%EB%B2%84%EC%A0%84-%EB%B3%84-%EC%B0%A8%EC%9D%B4%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B3%A0-ubuntu-nginx%EC%97%90-http-2%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4/)

[https://www.popit.kr/나만-모르고-있던-http2/](https://www.popit.kr/%EB%82%98%EB%A7%8C-%EB%AA%A8%EB%A5%B4%EA%B3%A0-%EC%9E%88%EB%8D%98-http2/)
