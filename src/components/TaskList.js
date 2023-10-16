import React from "react";
import Task from "./Task";
// import { TASKS } from "../data";

function TaskList({tasks, handleDeleteTask}) {
  // const [tasks, setTasks] = useState(TASKS)
  
  // const handleDeleteTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId))
  // }

  // onDelete={handleDeleteTask}
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          task={task}
          text={task.text}
          category={task.category}
          handleDeleteTask = {handleDeleteTask}
        /> 
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
