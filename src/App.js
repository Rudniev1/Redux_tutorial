import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, isLoggeds } from "./actions";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedz = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h1>
        <button onClick={() => dispatch(isLoggeds())}>Login</button>
      </h1>

      {isLoggedz ? <h3>Some shit i couldnt see</h3> : ""}
    </div>
  );
}
