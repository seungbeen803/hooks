// App.js
import { useInput } from "./useInput";
const App = () => {
  const [inputValue, handleChange, handleSubmit] = useInput();
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};
export default App;