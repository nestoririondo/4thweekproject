import React, { useState } from "react";
import trashcanImage from "../images/trashcan.png";
 
const ToDo = ({ item, toggleCompletion, toggleImportant, setTodos }) => {
const [hovered, setHovered] = useState(false);
const [editing, setEditing] = useState(false);
const [newTitle, setNewTitle] = useState("");
  
  const handleEdit = (id) => {
    setEditing(!editing);
    newTitle.trim() && setTodos((previousTodos) =>
    previousTodos.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    );
    setNewTitle("");
  }

  const handleDelete = () => {
    
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== item.id));
      
  };

    return (
      <>
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

        {editing ?
         <input
            type="text"
            id="editingTask"
            placeholder={item.title} 
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit(item.id)}
            autoFocus
         /> 
         :
          <span>{item.title}</span>}
        
        <img
          src={item.important ? "src/images/starFull.png" : "src/images/starEmpty.png"}
          alt="star"
          className={item.important ? "star important visible" : hovered ? "star visible" : "star"}
          onClick={() => toggleImportant(item.id)}
        />
        <img
          src={editing ? "src/images/editOK.png" : "src/images/edit.png"}
          alt="edit"
          className={hovered ? "edit visible" : "edit"}
          onClick={() => handleEdit(item.id)}
        />
        <img
            src={trashcanImage}
            alt="Delete"
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
            className={hovered ? "trashcan visible" : "trashcan"}
          />
      </li>
      </>
    );
  };

  export default ToDo;