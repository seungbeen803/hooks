import React, { useState, useRef } from "react";

const App = () => {
  // count = 0이 저장
  // input박스에서 값이 변경
  const [count, setCount] = useState(0);
  // countRef.current = 0;이 저장된다.
  const countRef = useRef(0);

  console.log('렌더링');

  const increaseCountState = () => {
    // count = count + 1과 같다
    // 그래서 state 변수인 count가 변경되었기 때문에 렌터링이 발생한다.
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    // countRef는 객체타입의 데이터라고 간주하고, countRef.current값이 변경되어도
    // 렌더링이 발생하지 않는다. 그러나 콘솔창에는 1씩 증가된 값이 출력된다.
    // state변수가 변경될때 렌더링이 발생하기 때문에 countRef.current에 저장되어
    // 있는 값이 브라우저에 출력된다.
    countRef.current = countRef.current + 1;
    console.log('Ref : ', countRef.current);
  };

  return (
    <div>
      <p>State:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increaseCountState}>State증가</button>
      <button onClick={increaseCountRef}>Ref증가</button>
    </div>
  );
};
export default App;