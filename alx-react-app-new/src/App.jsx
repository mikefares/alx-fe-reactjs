// import { useState } from "react";
import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import NewChild from "./components/NewChild";

function App({ children }) {
  const [count, setCount] = useState(0);

  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${otherCount} times`;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>This is the other count: {otherCount}</p>
      <button onClick={() => setOtherCount(otherCount + 5)}>
        Batch clicking
      </button>

      <NewChild />
    </div>
  );
}

export default App;
