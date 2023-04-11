// Info.js
import { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect의 두번째 인자 값을 []로 표시하면
  // 컴포넌트가 처음 마운트 될 때만 실행한다.
  useEffect(() => {
    console.log("마운트 될 때만 실행합니다.");
  }, []);

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