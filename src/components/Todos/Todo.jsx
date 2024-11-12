import "./TodoList.scss";

function Todo({ task, deleteTask }) {
  return (
    <>
      <li className="task">
        <div className="container">
          <div className="container__text">
            <h1>{task.title}</h1>
            <h2>{task.about}</h2>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              deleteTask(task.id);
            }}
          >
            x
          </button>
        </div>
      </li>
    </>
  );
}

export default Todo;
