// src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/counter/crud";
import { addUsers,setUsersFromStorage } from "../features/counter/crud";
function Crud() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser({ name }));
      setName("");
    }
  };

 

  const dispatch1 = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    dispatch1(setUsersFromStorage(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      
      <h2>Add User (Local)</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {users.map((u, index) => (
          <li key={index}>{u.name}</li>
        ))}
      </ul>

    </div>
  );
}

export default Crud;
