import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../redux/tasksSlice";
import "./TodoForm.scss";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "" || about === "") {
      alert("Все поля должны быть заполнены!");
    } else {
      const task = {
        title: title,
        about: about,
        id: uuidv4(),
        isMenuOpened: false,
      };

      dispatch(addTask(task));

      setTitle("");
      setAbout("");
    }
  };

  return (
    <form className="set-task" onSubmit={onSubmitHandler}>
      <div className="set-task__input">
        <input
          type="text"
          className="titleInput"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="aboutInput"
          placeholder="About..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default TodoForm;
