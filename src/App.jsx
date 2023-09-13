import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount((count) => ++count);
  };

  const countMinus = () => {
    setCount((count) => --count);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={countMinus}>
          - Минус
        </button>
        <button className="plus" onClick={countPlus}>
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default App;
