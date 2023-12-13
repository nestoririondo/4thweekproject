import ToDo from "./ToDo";

const DisplayToDos = ({ todos, setTodos }) => {
  const toggleCompletion = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };
console.log(todos)
  return (
    <div className="block">
      <div className="card-container">
        {todos.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleCompletion={toggleCompletion}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayToDos;