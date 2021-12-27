import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import { BrowserRouter, Route, Link } from "react-router-dom";

/**
 * Q6) 라우터 구현하기 (10pt)
 * 요구 사항:
 * 1. 페이지 목록의 각 링크를 클릭하면 해당 경로에 맞는 컴포넌트를 렌더링한다.
 * "/" = Home 컴포넌트(./pages/Home)
 * "/about" = About 컴포넌트(./pages/About)
 * "/profiles" = Profiles 컴포넌트 (./pages/Profiles)
 *
 * 2. 페이지 상단에 페이지 목록(page-list)을 유지한다.
 * 3. react-router-dom 라이브러리를 사용한다. (설치되어 있음)
 * 4. 현재 보고 있는 파일(Q6/index.js) 외에 다른 파일은 수정하지 않는다.
 *
 * 구현 결과: https://drive.google.com/file/d/1y03fzlTeVjs5jRBuvmWV-SoCwI3j1LVO/view?usp=sharing
 */

function Router() {
  // do something
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </BrowserRouter>
  );
}

export default Router;
