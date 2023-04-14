// App.js
import { useState } from 'react';
import Info from './Info';

const App = () => {
  // visible = false
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => { setVisible(!visible)} }>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr/>
      {/* visible값이 true일 때 Info 컴포넌트를 렌더링 */}
      {visible && <Info />}
    </div>
  );
};

export default App;