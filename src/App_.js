import { useInput } from "./useInput";

function displayMessage(message) {
  alert(message);
}

const App = () => {
  const [inputValue, handleChange] = useInput("", displayMessage);
  const handleSubmit = () => {
    alert(inputValue);
    //setInputValue("");
  };
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};
export default App;