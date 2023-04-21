// App.js
import React, {useEffect, useMemo, useState} from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 기본 데이터 타입
  // const location = isKorea ? "한국" : "외국";
  const location = useMemo(() => { // 객체타입
    return {
    country: isKorea ? "한국" : "외국",
    };
    }, [isKorea]);

  useEffect( () => {
    console.log("useEeffect 호출");
    // location이 변경될 때 렌더링이 발생하면서 useEffect가 실행
    // number 값이 변결될 때는 렌더링이 발생하지 않았음.
    // location이 객체 타입일 때는 렌더링이 될때마다 새롭게
    // 객체가 생성되므로 location에는 주소 값이 저장되는데 렌더링이 될 때마다
    // 다른 주소 값을 가지게 되므로 useEffect에서는 location이 변경되었다고 인식
    // number 값을 변경해도 렌더링이 발생한다.
    // location이 기본 데이터 타입일때는 location 값이
    // 변경되지 않음면 useEffect 실행(렌더링)되지 않는다.
  }, [location]);

  return (
    <div>
      <h2>하루 몇 끼 먹어요?</h2>
      <input
      type="number"
      value={number}
      onChange={(e) => { setNumber(e.target.value) }}
      />
      <hr/>
      <h2>어느 나라에 있어요?</h2>
      {/* <p>skfk:{location}</p> */}
      <p>나라: {location.country}</p>
      <button onClick={() => { setIsKorea(!isKorea) }}>비행기 타자!</button>
    </div>
  );
};

export default App;