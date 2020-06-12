import React, { useState } from "react";
import "./App.css";

function App() {
  const decrementHandle = () => {
    setCounter(counter - 1);
  };
  const incrementHandle = () => {
    setCounter(counter + 1);
  };
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <div>Contador: {counter}</div>
        <div>
          <button onClick={() => decrementHandle()}>Decrement</button>
          <button onClick={() => incrementHandle()}>Increment</button>
        </div>
      </header>
    </div>
  );
}

export default App;
