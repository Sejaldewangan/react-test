import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

export const Clock = () => {
  // const {value} =  useSelector((slices)=>slices.cart)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [clock, setClock] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1);
  }, []);
  return (
    <div>
      <h1>{clock}</h1>
      <div>
        {/* <h1>{value}</h1> */}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
      </div>
    </div>
  );
};
