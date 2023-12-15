import ToDo from "./ToDo";

const DisplayToDos = ({ todos, setTodos }) => {

  const toggleCompletion = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const toggleImportant = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, important: !t.important } : t))
    );
  }

console.log(todos)
  return (
    <ul>
        {todos.map((item) => (
            <ToDo
              key={item.id}
              eachTodo={item}
              toggleCompletion={toggleCompletion}
              toggleImportant={toggleImportant}
            />
          ))}
    </ul>
  );
};

export default DisplayToDos;