const ToDo = ({ eachTodo, toggleCompletion }) => {
    return (
      <li>
        <input
          id={eachTodo.id}
          name={eachTodo.title}
          type="checkbox"
          value={eachTodo.title}
          checked={eachTodo.done}
          onChange={() => toggleCompletion(eachTodo.id)}
        />
        <h3>{eachTodo.title}</h3>
      </li>
    );
  };
  export default ToDo;