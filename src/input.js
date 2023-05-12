import { useState } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    // inputValue값을 변경
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    alert(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <h1>ueeInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};
export default App;
