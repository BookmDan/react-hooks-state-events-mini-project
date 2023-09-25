import React, {useState} from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks] = useState(TASKS)
  
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          text={task.text}
          category={task.category}
          onDelete={handleDeleteTask}
        /> 
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
