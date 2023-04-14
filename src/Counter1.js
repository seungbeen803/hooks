// Counter1.js
import { useReducer } from 'react';
// action 값에 의해서 state 값을 변경시키는 함수이다.
function reducer(state, action) { 
  // action이 type: "INCREMENT"를 받음
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  };
};

const Counter1 = () => {
  // useReducer함수의 첫번째 인자는 reducer함수를 나타내는 것
  // value : 0는 state값
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
      {/* dispatch({ type: "INCREMENT"}) 이 문장은 function reducer(state, action)를
      호출하는 것으로 파라미터 값은 { type: "INCREMENT"}로 전달*/}
      <button onClick={() => dispatch({ type: "INCREMENT"})}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT"})}>-1</button>
    </div>
  );
};

export default Counter1;