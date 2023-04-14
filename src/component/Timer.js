// component/Timer.js
import { useEffect, useState } from 'react';

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000); // 1초 마다 실행됨

    return () => { // Timer가 언마운트 될 때 호출
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보시오!!</span>
    </div>
  );
};

export default Timer;