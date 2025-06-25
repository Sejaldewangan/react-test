import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [clock, setClock] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1);
  }, []);
  return (
    <div>
      <h1>{clock}</h1>
    </div>
  );
};
