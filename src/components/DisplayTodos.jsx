import ToDo from "./ToDo";

const DisplayToDos = ({ todos, setTodos,  }) => {

  const toggleCompletion = (id) => {    
    setTodos((previousTodos) =>
    previousTodos.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const toggleImportant = (id) => {
    setTodos((previousTodos) =>
    previousTodos.map((item) => (item.id === id ? { ...item, important: !item.important } : item))
    );
  }

  const editTask = (id) => {
    const taskToEdit = todos.find((it) => it.id === id);
    const newTitle = prompt("Please enter new title", taskToEdit.title);
    if (newTitle === null) return;
    setTodos((previousTodos) =>
      previousTodos.map((item) => (item.id === id ? { ...item, title: newTitle } : item))
    );
  }
  
  return (
    <ul>
        {todos.map((item) => (
            <ToDo
              item={item} 
              toggleCompletion={toggleCompletion}
              toggleImportant={toggleImportant}
              editTask={editTask}
            />
          ))}
    </ul>
  );
};

export default DisplayToDos;