import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Todo from "./Todo";

function TodoList({ tasks, deleteTask, toggleTodo, updateTask }) {
  return (
    <ul id="taskList">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTodo={toggleTodo}
            updateTask={updateTask}
          />
        ))}
      </SortableContext>
    </ul>
  );
}

export default TodoList;
