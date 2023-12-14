import { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayToDos from "./components/DisplayToDos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('todos')){
      console.log("localStorage tiene algo adentro")
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  },[])

  const handleLocalStorage = (newTodo) => {
    let newArr = [];
    if(localStorage.getItem('todos')){
      console.log("localStorage tiene algo adentro y lo vamos a llenar mas")
      newArr = JSON.parse(localStorage.getItem('todos'))
    }
    newArr.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(newArr))
  }

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
      <Form setTodos={setTodos} handleLocalStorage={handleLocalStorage}/>
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;