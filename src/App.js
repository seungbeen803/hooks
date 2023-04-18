// App.js
import { useState } from "react";

// const hardCalculate = (number) => {
//   console.log('시간이 많이 걸리는 계산');
//   for(let i = 0; i < 999999999; i++) {} // 1초 정도 지연
//   return number + 10000;
// };

const easyCalculate = (number) => {
  console.log('시간이 적게 걸리는 계산');
  console.log('짱 시간이 짧게 걸리는 계산');
  for(let i = 0; i < 999999999; i++) {} // 1초 정도 지연
  return number + 1;
};

// state변수가 업데이트 될 경우 App() 컴포넌트는 처음부터 다시 렌더링이
// 발생되기 때문에 easyCalculate()함수를 호출하여도 자동적으로
// hardCalculate()함수도 호출되기 때문에 시간이 지연된다.
const App = () => {
  // hardNumber = 1
  // const [hardNumber, setHardNumber] = useState(1);
  // easyNumber = 1
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <>
      {/* <div>
        <h3>시간이 많이 걸리는 계산</h3>
        <input
        type="number"
        value={hardNumber}
        // parseInt(e.target.value)는 정수 값으로 변환
        onChange={(e) => { setHardNumber(parseInt(e.target.value))}}
        />
        <span>+10000={hardSum}</span>
      </div> */}

      <div>
        <h3>시간이 적게 걸리는 계산</h3>
        <input
        type="number"
        value={easyNumber}
        // parseInt(e.target.value)는 정수 값으로 변환
        onChange={(e) => { setEasyNumber(parseInt(e.target.value))}}
        />
        <span>+1={easySum}</span>
      </div>
    </>
    
  );
};

export default App;