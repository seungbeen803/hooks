import React, { useState, useRef } from "react";

const App = () => {
  const [renderer, setRemderer] = useState(0);
  const countRef = useRef(0);
  // 지역변수는 렌더링이 될때마다 초기화(countVar=0) 된다.
  // 값이 변경되어도 렌더링이 발생하지 않는다.
  let countVar = 0;  // 지역변수

  console.log(countRef);
  console.log('렌더링');

  const doRendering = () => {
    // 렌더링하기 위한 목적
    setRemderer(renderer + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1; // 1증가
    console.log('Ref : ', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1; // 1증가
    console.log("var : ", countVar);
  };

  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref:{countRef.current}</p>
      <p>var:{countVar.current}</p>
      <button onClick={doRendering}>렌더!!</button>
      <button onClick={increaseCountRef}>Ref증가</button>
      <button onClick={increaseVar}>Var증가</button>
      <button onClick={printResult}>Ref Var 값 출력</button>
    </div>
  );
};
export default App;