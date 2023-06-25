import { useState } from "react";
import React from "react";

const Home = () => {
  const [tareas, setTareas] = useState([]);
  const [ingreso, setIngreso] = useState("");

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      setTareas([...tareas, ingreso]);
      setIngreso("");
    }
  };

  const handleDelete = (id) => {
    setTareas(tareas.filter((task, index) => index !== id));
  };

  return (
    <div className="text-center">
      <div className="container-list">
        <input
          type="text"
          value={ingreso}
          maxlength="32"
          onChange={(event) => setIngreso(event.target.value)}
          onKeyDown={handleSubmit}
        />
        <ul className="cont-button">
          {tareas.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button className="clear" onClick={() => handleDelete(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
