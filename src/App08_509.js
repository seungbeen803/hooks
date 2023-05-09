//App.js
import { Component, useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1); //초기값 : 0
  // const [rendercount, setRenderCount] = useState(1);
  const renderCount = useRef(1); //특정 DOM에 접근할 때 사용
  //HOOK 함수, 컴포넌트가 마운트, 업데이트, 언마운트되었을 때 원하는 작업 수행

  useEffect( () => {
    renderCount.current = renderCount.current + 1;
    console.log('랜더링 함수');
    // setRenderCount(rendercount + 1);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려!</button>
    </div>
  );
};
export default App;