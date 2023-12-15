import { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayToDos from "./components/DisplayToDos";

const App = () => {
  const [todos, setTodos] = useState(() => {
    if(localStorage.getItem('localTodos')){
      return JSON.parse(localStorage.getItem('localTodos'))
    } else {
      return []
    }
    });

  useEffect(()=>{
    localStorage.setItem('localTodos', JSON.stringify(todos))
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
    <div className="App">
      <Form setTodos={setTodos}/>
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;