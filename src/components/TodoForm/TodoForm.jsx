import { useState } from "react";
import "./TodoForm.scss";

function TodoForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  const onSubmitHandler = (event) => {
    if (title === "" || about === "") {
      event.preventDefault();
      alert("Все поля должны быть заполнены!");
    } else {
      event.preventDefault();
      addTask({ title, about });
      setTitle("");
      setAbout("");
    }
  };

  return (
    <form className="set-task" onSubmit={onSubmitHandler}>
      <div className="set-task__input">
        <input
          type="text"
          id="titleInput"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="aboutInput"
          placeholder="About..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <button type="submit" id="addTask">
        +
      </button>
    </form>
  );
}

export default TodoForm;
