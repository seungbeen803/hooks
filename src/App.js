// App.js
import { useState } from "react";

const hardCalculate = (number) => {
  console.log('시간이 많이 걸리는 계산');
  for(let i = 0; i < 999999999; i++) {} // 1초 정도 지연
  return number + 10000;
};

// const easyCalculate = (number) => {
//   console.log('시간이 적게 걸리는 계산');
//   console.log('짱 시간이 짧게 걸리는 계산');
//   for(let i = 0; i < 999999999; i++) {} // 1초 정도 지연
//   return number + 1;
// };

const App = () => {
  // hardNumber = 1
  const [hardNumber, setHardNumber] = useState(1);
  // easyNumber = 1
  // const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  // const easySum = easyCalculate(easyNumber);

  return (
    <>
      <div>
        <h3>시간이 많이 걸리는 계산</h3>
        <input
        type="number"
        value={hardNumber}
        // parseInt(e.target.value)는 정수 값으로 변환
        onChange={(e) => { setHardNumber(parseInt(e.target.value))}}
        />
        <span>+10000={hardSum}</span>
      </div>

      {/* <div>
        <h3>시간이 적게 걸리는 계산</h3>
        <input
        type="number"
        value={easyNumber}
        // parseInt(e.target.value)는 정수 값으로 변환
        onChange={(e) => { setEasyNumber(parseInt(e.target.value))}}
        />
        <span>+1={easySum}</span>
      </div> */}
    </>
    
  );
};

export default App;