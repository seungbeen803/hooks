//App.js
// createContex, useContext를 가져옴
import { createContext, useContext } from 'react';
const MyContext = createContext();
// MyContext 객체 변수 생성
function App() {
  return (
    <MyContext.Provider value="Hello World">
      {/* 호출할 Context를 감싸준다 */}
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <Message />;
}

function Message() {
  const value = useContext(MyContext);
  // MyContext에 있는 value값을 value2에게 넘겨준다.
  return <div>Received : {value} </div>;
}

export default App;