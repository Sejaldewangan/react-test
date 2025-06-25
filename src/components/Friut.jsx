import React, { useState } from "react";

const Friut = () => {
  const [friut, setFriut] = useState("apple");

  const updateFriut = () => {
    setFriut("banana");
  };
  const Phal = () => {
    if (setFriut() === "banana") {
      setFriut("orange");
    } else {
      setFriut("apple");
    }
  };

  return (
    <div>
      <button
        className="bg-black text-white p-2 rounded-xl"
        onClick={() => updateFriut()}
      >
        {friut}
      </button>
    </div>
  );
};

export default Friut;
