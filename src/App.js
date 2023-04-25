// App.js
import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);
  // useCallback의 두 번째 파라미터인 []안에 값이 없을 경우
  // someFunction을 useCallback으로 감싸주면 처음 렌더링이 될 때에
  // number에 0이 저장된 상태에서 메모리에 저장이 되기 때문에
  // Call someFunc 버튼을 누르면 계속해서 0이 출력된다.

  // useCallback의 두 번째 파라미터인 [number]에는 number값이 변경될 때마다
  // 함수를 호출하는데 변경된 number값이 출력된다.

  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // };

  useEffect( () => {
  }, [someFunction]);
  // someFunction이 함수이면 객체 타입이기 때문에 렌더링이 될때마다
  // 새로운 객체가 만들어진다.
  // 따라서 someFunction함수가 바뀐 것으로 인식하기 때문에 렌더링이 발생
  // number state 값을 변경하여도 처음부터 렌더링이 되기 때문에
  // someFunction함수 객체가 생성이 된다.
  // 함수는 렌더링이 될때마다 무조건 새로운 객체가 생성

  return (
    <div>
      <input
      type="number"
      value={number}
      onChange={(e) => { setNumber(e.target.value) }}
      />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
};
export default App;