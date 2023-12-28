import ToDo from "./ToDo";

const DisplayToDos = ({ todos, setTodos }) => {

  const toggleCompletion = (id) => {    
    const updatedTodos = (previousTodos) => previousTodos.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
    setTodos(updatedTodos);
  };

  const toggleImportant = (id) => {
    setTodos((previousTodos) =>
    previousTodos.map((item) => (item.id === id ? { ...item, important: !item.important } : item))
    );
  }
  
  return (
    <ul>
        {todos.map((item) => (
            <ToDo
              item={item} 
              toggleCompletion={toggleCompletion}
              toggleImportant={toggleImportant}
              setTodos={setTodos}
            />
          ))}
    </ul>
  );
};

export default DisplayToDos;