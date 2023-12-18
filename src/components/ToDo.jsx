const ToDo = ({ item, toggleCompletion, editTask }) => {
    return (
      <li className="taskItem">
        <input
          id={item.id}
          name={item.title}
          type="checkbox"
          checked={item.done}
          onChange={() => toggleCompletion(item.id)}
        />
        <span>{item.title}</span>
        <button onClick={() => editTask(item.id)}>Edit</button>
      </li>
    );
  };
  export default ToDo;