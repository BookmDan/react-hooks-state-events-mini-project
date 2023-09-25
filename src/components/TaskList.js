import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task = {task} /> 
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
