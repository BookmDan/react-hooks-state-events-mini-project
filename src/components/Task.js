import React from "react";

function Task({id, task, text ,category, onDelete, }) {
  // const { category, text, id } = task
  
  const handleDeleteClick = () => {
    onDelete(id)
  }
  return (
    <div className="task">
      <div className="label">{category} </div>
      <div className="text"> {text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
