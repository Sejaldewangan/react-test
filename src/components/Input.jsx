import React, { useState } from "react";

const Input = () => {
  const [gender,setGender] =useState("both")
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
        <h1>{input}</h1>
        <hr />
     <input onChange={(event)=>{ setGender(event.target.value)}} name="gender" type="radio" value={"male"} id="male" />
     <label htmlFor="male">male</label>
    
     <hr />
 <input onChange={(event)=>{ setGender(event.target.value)}} name="gender" type="radio" value={"female"} id="female" />
     <label htmlFor="female">female</label>
     <hr />
     <input onChange={(event)=>{ setGender(event.target.value)}} checked={gender == "both"} name="gender" type="radio" value={"both"} id="both" />
     <label htmlFor="both">both</label>
     <hr />
     <h1>you are : {gender}</h1>
    </div>
  );
};

export default Input;
