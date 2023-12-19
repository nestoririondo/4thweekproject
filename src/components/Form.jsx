import React, { useState } from "react"; 

const Form = ({ setTodos, handleLocalStorage }) => {

  const [taskText, setTaskText] = useState(""); // This state should contain the taskText of the to-do

  const handleChange = (event) => setTaskText(event.target.value); // Updates the taskText state with each keystroke

  const handleAdd = (event) => {
    event.preventDefault();

    if (taskText.trim() === "") {
      alert("Please write something");
    } else {
      const newId = Math.floor(Math.random() * 1000000000);

      const newTodo = {
        id: newId,
        title: taskText, // We are using the title state
        done: false,
        important: false,
      }

      const updateTodos = (whateverWasThereBefore) => [...whateverWasThereBefore, newTodo];
      // We are DECLARING a function that puts the new to-do at the end of the array
      
      setTodos(updateTodos); // And now we pass the function as an argument!!! damn
      handleLocalStorage(newTodo)
      setTaskText("");
    }
    }

    const handleDeleteAll = () => {
      setTodos([]) // delete from useState.
      localStorage.removeItem('todos'); // delete from localStorage. checked. 
      console.log(localStorage.getItem('todos')); // check if localStorage is empty.
    };

    /* const handleDeleteTodo = (id) => { //id is the key of the todo we want to delete
      const updateTodos = todos.filter((todo) => todo.id !== id); // delete from useState. If the id of the todo is not the same as the id of the todo we want to delete, then keep it.
      setTodos(updateTodos); // update useState. updateTodos makes setTodos equal to the new array
      localStorage.setItem('todos', JSON.stringify(updateTodos)) // update localStorage with the new array
    } */

    const handleDeleteTodo = (id) => {
      console.log("Before deletion - todos:", todos);
      const updateTodos = todos.filter((todo) => todo.id !== id);
      console.log("After deletion - updateTodos:", updateTodos);
      setTodos(updateTodos);
      console.log("After deletion - todos (state updated):", todos);
      localStorage.setItem('todos', JSON.stringify(updateTodos));
      console.log("After deletion - localStorage updated:", localStorage.getItem('todos'));
    }

  return (
    <div className="block">
      <form onSubmit={handleAdd}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="add task..."
              value={taskText}
            />
            <button type="submit">+</button>
            <button type="reset" onClick={handleDeleteTodo}>Delete to-do</button>
            <button type="button" onClick={handleDeleteAll}>Delete All</button>
      </form>
    </div>
  );
};
export default Form;