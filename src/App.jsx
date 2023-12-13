import { useState } from "react";
import Form from "./components/Form";
import DisplayToDos from "./components/DisplayToDos";

export default function App() {
  // This state should contain the array of to-dos
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Form setTodos={setTodos} />
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}