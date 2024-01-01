import { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayToDos from "./components/DisplayToDos";
import DeleteButtons from "./components/DeleteButtons";
import "./style.css";

const App = () => {
  const [secondContainerActive, setSecondContainerActive] = useState(false);

  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("localTodos");
    return localTodos ? JSON.parse(localTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos)); // saves todo to localStorage when todos changes
  }, [todos]);

  return (
    <div className="outer">
      <div className="container">
        <Form setTodos={setTodos} id="form" />
        {/* Paso 2: Importamos DisplayToDos */}
        <DisplayToDos todos={todos} setTodos={setTodos} />

        {/* Paso 3: Snippets para sacar los botones de borrar */}
      </div>
      <div className="extramenu">
        <img
          src="../src/images/hamburger.png"
          className="hamburger"
          onClick={() => setSecondContainerActive(!secondContainerActive)}
        />
        <div
          className={
            secondContainerActive ? "secondcontainer active" : "secondcontainer"
          }
        >
          <DeleteButtons todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
