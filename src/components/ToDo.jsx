const ToDo = ({ item, toggleCompletion }) => {
    return (
      <li className="taskItem">
        <input
          id={item.id}
          name={item.title}
          type="checkbox"
          checked={item.done}
          onChange={() => toggleCompletion(item.id)}
        />
        <h3>{item.title}</h3>
      </li>
    );
  };
  export default ToDo;