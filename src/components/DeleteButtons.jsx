import React, { useState, useEffect } from "react";

const DeleteButtons = ({ todos, setTodos }) => {

  const deleteAll = () => {
    // Clear the todos array
    setTodos([]);

    // Clear the local storage
    localStorage.removeItem("todos");
  };

  const deleteSelectedCompleted = () => {
    const newArray = todos.filter((todo) => todo.done === false);
    setTodos(newArray)
  };

  return (
      <div className="deleteButtons">
        <button onClick={deleteAll}>Delete All</button>
        <button onClick={deleteSelectedCompleted}>Delete Selected Completed</button>
      </div>
  );
};

export default DeleteButtons;