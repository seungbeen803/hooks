// useInput.js
import { useState } from "react";
export function useInput(initialValue, submitAction) {
  // initalValue = "", submitAction=displayMessage
  const [inputValue, setInputValue] = useState(initialValue);
  // inputValue="안녕", inputValue="123"

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // inputValue 값을 변경
  };

  const handleSubmit = () => {
    submitAction(inputValue); // App.js의 displayMessage 함수를 호출
    setInputValue(""); // inputValue값을 ""초기화
  };

  return [inputValue, handleChange, handleSubmit];
  // inputValue와 handleChange 값을 호출한 곳으로 돌려준다
}