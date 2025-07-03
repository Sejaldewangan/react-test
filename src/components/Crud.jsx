import React, { useRef } from "react";

const Crud = () => {
    const ref = useRef(initialvalue)
  return (
    <div>
      <form action="">
        <label  for="fname">First name:</label>
      <br />
      <input type="text" ref={ref} id="fname" name="fname" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" ref={ref} id="lname" name="lname"></input>
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
      </form>
    </div>
  );
};

export default Crud;
