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
    let newArr = []; /*  1. Obtener las tareas actuales de localStorage o crear un arreglo vacío    */
    if(localStorage.getItem('todos')){
      console.log("localStorage tiene algo adentro y lo vamos a llenar mas")
      newArr = JSON.parse(localStorage.getItem('todos'))
    }
    newArr.push(newTodo) // 3. Actualizar el localStorage con el nuevo arreglo de tareas
    localStorage.setItem('todos', JSON.stringify(newArr))
  }

  

  return (
    <div className="App">
      <Form setTodos={setTodos} handleLocalStorage={handleLocalStorage}/>
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;