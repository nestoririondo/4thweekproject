import React, { useState } from "react";

const Form = ({ setTodos }) => {

  const [taskText, setTaskText] = useState(""); // This state should contain the taskText of the to-do

  const handleChange = (event) => setTaskText(event.target.value); // Updates the taskText state with each keystroke

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskText.trim() === "") return;

    const newId = Math.floor(Math.random() * 1000000000);

    const newTodo = {
      id: newId,
      title: taskText, // We are using the title state
      done: false,
      important: false,
    }

    const updateTodos = (whateverWasThereBefore) => [...whateverWasThereBefore, newTodo]; // We are DECLARING a function that puts the new to-do at the end of the array   
    setTodos(updateTodos); // And now we pass the function as an argument!!! damn

    setTaskText("");
    }

  return (
    <div className="block">
      <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="add task..."
              value={taskText}
            />
            <button type="submit">+</button>
      </form>
    </div>
  );
};
export default Form;