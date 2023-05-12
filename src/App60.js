import { createContext, useContext } from 'react';
const MyContext = createContext();
// MyContext 객체 변수 생성
function App() {
  return (
    <MyContext.Provider value="Hello World">
      {/* 호출할 Context를 감싸준다 */}
      <AwesomeComponent />
    </MyContext.Provider>
  );
}

function AwesomeComponent({ value }) {
  return (
    <div>
      <FirstComponent value={value} />
      <SecondComponent value={value} />
      <ThirdComponent value={value} />
    </div>
  )
}

function FirstComponent({ value }) {
  const value2 = useContext(MyContext);
  return <div> First Component says: {value2}</div>
}

function SecondComponent({ value }) {
  const value2 = useContext(MyContext);
  return <div> Second Component says: {value2}</div>
}

function ThirdComponent({ value }) {
  const value2 = useContext(MyContext);
  return <div> Third Component says: {value2}</div>
}

export default App;