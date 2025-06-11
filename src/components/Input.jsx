import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState([]);
  const handleInput = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked === true) {
      setInput([...input, event.target.value]);
    } else {
      setInput(input.filter((item) => item != event.target.value));
    }
  };
  return (
    <div>
      {/* <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        type="text"
        placeholder="enter your name"
      />
      <hr />
      {console.log(input)}
      <h1>{input}</h1> */}
      <input onChange={handleInput} type="checkbox" id="A" value={"A"} />{" "}
      <label htmlFor="A">A</label>
      <hr />
      <input onChange={handleInput} type="checkbox" id="B" value={"B"} />{" "}
      <label htmlFor="B">B</label>
      <hr />
      <input onChange={handleInput} type="checkbox" id="C" value={"C"} />{" "}
      <label htmlFor="C">C</label>
      <hr />
      {/* <input onChange={handleInput} type="checkbox" id="a" value={a} />{" "}
      <label htmlFor="a">A</label>
      <hr />
      <input onChange={handleInput} type="checkbox" id="a" value={a} />{" "}
      <label htmlFor="a">A</label>
      <hr />
      <input onChange={handleInput} type="checkbox" id="a" value={a} />{" "}
      <label htmlFor="a">A</label>
      <hr />
      <input onChange={handleInput} type="checkbox" id="a" value={a} />{" "}
      <label htmlFor="a">A</label>
      <hr />
      <input onChange={handleInput} type="checkbox" id="a" value={a} />{" "}
      <label htmlFor="a">A</label>
      <hr /> */}
      <h1>{input}</h1>
    </div>
  );
};

export default Input;
