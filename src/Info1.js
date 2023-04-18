// Info1.js
import { useReducer } from "react";

// action = e.target
function reducer (state, action) {
  return {
    // state가 2개 이상 있을 때
    ...state,
    // 
    [action.name]: action.value,
    // 첫 번째 input박스에서 입력한 내용은 name state에 저장된다.
    // 두 번째 input박스에서 입력한 내용은 nickname state에 저장된다.
  };
}

const Info1 = () => {
  const[state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  // name과 nickname은 state 변수로 선언
  const { name, nickname } = state;
  const onChange = (e) => {
    // reducer함수가 호출, 인자 값은 e.target이 전달됨
    dispatch(e.target);
  };

  // input박스가 많이 있어도 onChange이벤트 함수는 1개만 가지고 실행
  return(
    <div>
      <div>
        {/* input박스에 데이터를 입력하면 Change이벤트가 발생하고
        onChange함수를 호출 */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info1;