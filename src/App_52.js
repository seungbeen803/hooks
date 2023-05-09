//App.js
import React, { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  // 처음 렌더링될 때 실행하는 것으로 input박스에 포커스를 발생한다.


  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.value = ""; // input박스의 내용을 삭제
    inputRef.current.focus(); // input박스에 포커스
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};
export default App;