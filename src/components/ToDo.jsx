import React, { useState } from "react";

const ToDo = ({ item, toggleCompletion, toggleImportant, editTask }) => {
const [hovered, setHovered] = useState(false);
  
    return (
      <li 
      className={item.done ? "taskItem completed" : "taskItem"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      >
        <img
          src={item.done ? "src/images/checked.png" : "src/images/unchecked.png"}
          alt="checkbox" 
          className="checkbox"
          onClick={() => toggleCompletion(item.id)}
        />
        <span>{item.title}</span>
        <img
          src={item.important ? "src/images/starFull.png" : "src/images/starEmpty.png"}
          alt="star"
          className={item.important ? "star important visible" : hovered ? "star visible" : "star"}
          onClick={() => toggleImportant(item.id)}
        />
        <img
        src="src/images/edit.png"
        alt="edit"
        className={hovered ? "edit visible" : "edit"}
        onClick={() => editTask(item.id)}
        />
      </li>
    );
  };
  export default ToDo;