import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import NoTasks from "../NoTasks/NoTasks";
import { deleteTask, toggleTask, editTask } from "../../redux/actionCreators";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const toggleTaskHandler = (id) => {
    dispatch(toggleTask(id));
  };

  const updateTaskHandler = (id, editedTask) => {
    dispatch(editTask(id, editedTask));
  };

  return (
    <ul id="taskList">
      {tasks.length === 0 ? (
        <NoTasks />
      ) : (
        tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            deleteTask={handleDeleteTask}
            toggleTask={toggleTaskHandler}
            updateTask={updateTaskHandler}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
