import { useState } from "react";
import ConfirmDelete from "../Confirm/ConfirmDelete";
import ConfirmEdit from "../Confirm/ConfirmEdit";
import Share from "../Share/Share";
import shareIcon from "../../assets/images/menu/share.svg";
import infoIcon from "../../assets/images/menu/info.svg";
import editIcon from "../../assets/images/menu/edit.svg";
import "./TodoList.scss";

function Todo({ task, deleteTask, toggleTask, updateTask }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmEdit, setShowConfirmEdit] = useState(false);
  const [showShareMenu, setShowShare] = useState(false);

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setShowConfirmDelete(false);
  };

  const handleDeleteClick = () => {
    setShowConfirmDelete(true);
  };

  const handleSaveEdit = (editedTask) => {
    updateTask(task.id, editedTask);
    setShowConfirmEdit(false);
  };

  const handleEditClick = () => {
    setShowConfirmEdit(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleCancelEdit = () => {
    setShowConfirmEdit(false);
  };

  const handleShareClick = () => {
    setShowShare(true);
  };

  const handleShareCancel = () => {
    setShowShare(false);
  };

  return (
    <>
      <li className="task">
        <div className="container" onClick={() => toggleTask(task.id)}>
          <div className="container__text">
            <h1>{task.title}</h1>
            <h2>{task.about}</h2>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleDeleteClick();
            }}
          >
            x
          </button>
        </div>
        <div className={`menu${task.isMenuOpened ? " visible" : ""}`}>
          <button>
            <img
              src={shareIcon}
              alt="share"
              onClick={(event) => {
                event.stopPropagation();
                handleShareClick();
              }}
            />
          </button>
          <button>
            <img src={infoIcon} alt="info" />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleEditClick();
            }}
          >
            <img src={editIcon} alt="edit" />
          </button>
        </div>
      </li>
      <ConfirmDelete
        show={showConfirmDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <ConfirmEdit
        show={showConfirmEdit}
        task={task}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
      <Share show={showShareMenu} onCancel={handleShareCancel} />
    </>
  );
}

export default Todo;
