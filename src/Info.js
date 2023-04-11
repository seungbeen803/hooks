// Info.js
import { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 컴포넌트가 처음 마운트 될 때 2번 랜더링(브라우저 실행)이 발생한다.
  // state(name 또는 nickname)값이 변경될 때마다 랜더링이 발생한다.
  useEffect(() => {
    console.log("랜더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
  });

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
      <input value = {name} onChange={onChangeName}/>
      <input value = {nickname} onChange={onChangeNickname}/>
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