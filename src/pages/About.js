//  src/pages/about.js

import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // useSearchParams()훅에 의해서 현재 URL을 searchParams에게 넘겨준다.
  const detail = searchParams.get("detail");
  // 현재 URL은 http://localhost:3000/about?detail=true&mode=1 인데
  // ?detail 의 값을 가져와서 detail2에 저장한다. 따라서 detail2=true
  const mode = searchParams.get("mode");
  // 현재 URL은 http://localhost:3000/about?detail=true&mode=1 인데
  // mode의 값을 가져와서 mode에 저장한다. 따라서 mode=1
  console.log("detail=", detail, "mode=", mode);

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
    // mode값은 그대로 있고, detail값이 true면 false로 false면 true로 변경
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    // mode값이 null이면 1, 아니면 1증가
    setSearchParams({ mode: nextMode, detail });
    // mode값은 nextMode값으로 변경하고, detail값은 고정
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      {/* <p>쿼리스트링: {location.search}</p> */}
      {/* search는 현재 URL에서 ?를 포함한 문자열이다. 
      예를 들면 http://localhost:3000/about?detail=true&mode=1 
      URL에 입력했을때 search는 ?detail=true&mode=1 이 된다.*/}
    </div>
  );
};

export default About;
