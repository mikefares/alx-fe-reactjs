import React, { useContext, useReducer, useState } from "react";
// import { testContext } from "../App";

const reducer = (state, action) => {
  if (action.type == "increase") {
    return { count: state.count + 1 };
  } else {
    return { count: state.count - 1 };
  }
};

const initialState = { count: 0 };

const NewChild = () => {
  //   const [count, setCount] = useState(0);
  //   const value = useContext(testContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseState = () => {
    dispatch({ type: "increase" });
  };

  const decreaseState = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <div>
      <p>{state.count}</p>
      <br />
      <button onClick={increaseState}>Increase</button>
      <button onClick={decreaseState}>Decrease</button>
    </div>
  );
};

export default NewChild;
