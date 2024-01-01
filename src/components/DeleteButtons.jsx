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
  <div className="extramenu">
    <div className="deleteButtons">
        <button id="clearAllButton" onClick={deleteAll}>Delete All</button>
        <button onClick={deleteSelectedCompleted}>Delete Completed</button>
      </div>
  </div>
  );
};

export default DeleteButtons;