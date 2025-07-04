import React, { useRef } from "react";

const Crud = () => {
    const ref = useRef("initialvalue")
     const handleIt=()=>{
      console.log("InputValue:",ref.current.valueof);
      
     }
  return (
    <div>
      <form action="">
        <label  htmlFor="fname">First name:</label>
      <br />
      <input className="border-amber-700 border" type="text" ref={ref} id="fname" name="fname" />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" ref={ref} id="lname" name="lname"></input>
      </form>
      <button onClick={handleIt}>log</button>
      {/* <br />
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname"></input>
      <br />
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname"></input>
      <br />
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname"></input> */}
    </div>
  );
};

export default Crud;
