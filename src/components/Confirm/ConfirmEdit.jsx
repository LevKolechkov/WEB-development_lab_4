import { useEffect, useState } from "react";
import "./Confirm.scss";

function ConfirmEdit({ show, task, onSave, onCancel }) {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="overlay">
      <div className="edit">
        <input
          type="text"
          name="title"
          className="edit__mini-input"
          placeholder="Max input"
          value={editedTask.title}
          onChange={handleChange}
        />
        <textarea
          name="about"
          className="edit__max-input"
          placeholder="Max input"
          value={editedTask.about}
          onChange={handleChange}
        ></textarea>
        <div className="edit__buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEdit;
