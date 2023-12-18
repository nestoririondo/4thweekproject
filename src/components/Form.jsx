import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // unique ID generation

const Form = ({ setTodos }) => {

  const [taskText, setTaskText] = useState(""); // This state should contain the taskText of the to-do
  const handleChange = (event) => setTaskText(event.target.value); // Updates the taskText state with each keystroke

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskText.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      title: taskText,
      done: false,
      important: false,
    }

    const updateTodos = (whateverWasThereBefore) => [...whateverWasThereBefore, newTodo]; // We are DECLARING a function that puts the newly created to-do at the end of the array of to-dos
    setTodos(updateTodos); // And now we pass the function as an argument!!! This is the magic of useState

    setTaskText("");
    }

  return (
      <form id="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="add task..."
              value={taskText}
              id="inputField"
            />
            {taskText && <button type="submit" id="addButton">+</button>}
      </form>
  );
};
export default Form;