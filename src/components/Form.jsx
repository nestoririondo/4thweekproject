import React, { useState } from "react";

const Form = ({ setTodos }) => {

  const [title, setTitle] = useState(""); // This state should contain the title of the to-do

  const handleChange = (event) => setTitle(event.target.value); // Updates the title state with each keystroke

  const handleAdd = (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please fill all fields");
    } else {
      function updateTodos(whateverWasThereBefore) {       // We are DECLARING a function that puts
        const newId = Math.floor(Math.random() * 1000000); // the new to-do at the end of the array
        return [
          ...whateverWasThereBefore,
          {
            id: newId,
            title: title,
            done: false,
            important: false,
          },
        ];
      }
      setTodos(updateTodos); // We pass the function as an argument!!! so cool
      setTitle("");
    }
    }

  return (
    <div className="block">
      <form onSubmit={handleAdd}>
          <div>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="add task..."
              value={title}
            />
            <button type="submit">+</button>
          </div>
      </form>
    </div>
  );
};
export default Form;
