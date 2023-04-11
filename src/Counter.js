// Counter.js
import { useState } from "react";
// 컴포넌트에서 동적인 값을 상태(state)라고 부른다.
// 리액트에 useState라는 함수를 사용하면 컴포넌트에서 상태를 관리할 수 있다

const Counter = () => {
  // value를 state(상태)라고 하는데, 멤버변수이다.
  // setValue는 value 변수 값을 설정(수정)할 때 사용하는 함수이다.
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};
export default Counter;