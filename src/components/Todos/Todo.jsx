import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./TodoList.scss";
import shareIcon from "../../assets/images/menu/share.svg";
import infoIcon from "../../assets/images/menu/info.svg";
import editIcon from "../../assets/images/menu/edit.svg";
import ConfirmDelete from "../Confirm/ConfirmDelete";
import ConfirmEdit from "../Confirm/ConfirmEdit";
import Share from "../Share/Share";

function Todo({ task, deleteTask, toggleTodo, updateTask }) {
  const taskId = task.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: taskId });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmEdit, setShowConfirmEdit] = useState(false);
  const [showShareMenu, setShowShare] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmDelete(true);
  };

  const handleEditClick = () => {
    setShowConfirmEdit(true);
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setShowConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleSaveEdit = (editedTask) => {
    updateTask(task.id, editedTask);
    setShowConfirmEdit(false);
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
      <li style={style} className="task">
        <div className="container" onClick={() => toggleTodo(task.id)}>
          <div className="container__text">
            <div
              className="dragable"
              {...attributes}
              {...listeners}
              ref={setNodeRef}
            ></div>
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
