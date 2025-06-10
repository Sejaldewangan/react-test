import React from "react";
import { useState } from "react";
const Toggle = () => {
  const [tog, setTog] = useState(false);
  const up = () => {
    setTogTog("hiiiii  "); 
  }; 
  return (
    <div>
        <h1>bittubhiya</h1>
        {tog?<h1>hi</h1>:null}
      <button onClick={() => setTog(!tog)}>TOggle</button>
    </div>
  );
};

export default Toggle;
