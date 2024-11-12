import "./Confirm.scss";

function ConfirmDelete({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="delete-task">
        <h1>Delete this task?</h1>
        <div className="delete-task__buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
