import React from "react";

function Task({id, task, text ,category, handleDeleteTask }) {
  
  const handleDelete = () => {
    handleDeleteTask(task)
  }
  return (
    <div className="task">
      <div className="label">{category} </div>
      <div className="text"> {text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
