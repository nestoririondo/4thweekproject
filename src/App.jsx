import { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayToDos from "./components/DisplayToDos";
import "./style.css";

const App = () => {

  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('localTodos');
    return localTodos ? JSON.parse(localTodos) : [];})

  useEffect(()=>{ 
    localStorage.setItem('localTodos', JSON.stringify(todos)) // saves todo to localStorage when todos changes
    },[todos])

  // const deleteFromEverywhere = () => {
  //   // delete from useState
  //   // edit out from localStorage
  // }

  // const editEverywhere = () => {
  //   // edit from useState
  //   // edit localStorage using the todos useState

  // }

  return (
    <div className="outer">
    <div className="container">
      <Form setTodos={setTodos} id="form"/>
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
    </div>
  );
}

export default App;