import React, { useState, useEffect } from "react";

const DeleteButtons = ({ todos, setTodos }) => {
  const [todos, setTodos] = useState([]);

  const deleteAll = () => {
    // Clear the todos array
    setTodos([]);

    // Clear the local storage
    localStorage.removeItem("todos");
  };

  const deleteSelectedCompleted = () => {
    const selectedToDo = todos.find((todo) => todo.done);
    if (selectedToDo) {
      // Remove the selected todo from the todos array
      todos = todos.filter((todo) => todo.id !== selectedToDo.id);

      // Save the updated list of todos to localStorage
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <div className="deleteButtons">
      <button onClick={deleteAll}>Delete All</button>
      <button onClick={deleteSelectedCompleted}>Delete Selected Completed</button>
    </div>
  );
};

export default DeleteButtons;