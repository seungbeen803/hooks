// Info.js
import { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  // 컴포넌트가 처음 마운트 될때 2번 렌더링(브라우저 실행)이 발생한다.
  // state(name 또는 nickname)값이 변경될때마다 렌더링이 발생한다
  // useEffect의 두번째 인자값을 []로 표시하면
  // 컴포넌트가 처음 마운트 될때만 실행한다
  const [nickname, setNickname] = useState('');

  // useEffect의 두번째 인자 값을 [name]로 표시하면
  // state의 name 값이 변경될 때마다 실행한다.
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log('unmount');
    }
  }, []); // 2번째 인자를 값이 없는 배열로 표현하면 언마운트 될 때
  // return() 메서드가 호출된다

  const onChangeName = (e) => {
    // e.target.value는 input박스의 내용을
    // name에게 저장
    setName(e.target.value);
  }
  const onChangeNickname = (e) => {
    // e.target.value는 input박스의 내용을
    // nickname에게 저장
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b>{name}
        </div>
        <div>
          <b>닉네임 : </b>{nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;