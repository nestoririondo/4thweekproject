const ToDo = ({ todo, toggleCompletion }) => {
    return (
      <div>
        <input
          id={`todo_${todo.id}`}
          name={todo.title}
          type="checkbox"
          value={todo.title}
          checked={todo.done}
          onChange={() => toggleCompletion(todo.id)}
        />
        <h3>{todo.title}</h3>
      </div>
    );
  };
  export default ToDo;
  