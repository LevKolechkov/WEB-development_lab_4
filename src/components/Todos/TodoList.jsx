import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import NoTasks from "../NoTasks/NoTasks";
import { deleteTask } from "../../redux/actionCreators";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul id="taskList">
      {tasks.length === 0 ? (
        <NoTasks />
      ) : (
        tasks.map((task) => (
          <Todo key={task.id} task={task} deleteTask={handleDeleteTask} />
        ))
      )}
    </ul>
  );
}

export default TodoList;
