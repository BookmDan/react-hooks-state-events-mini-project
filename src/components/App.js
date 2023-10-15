import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)

  const handleCategoryChange = (category) => {
    setCategories(category)
  }
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task)=> task.id !== taskId))
  }

  const handleTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={categories}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={TASKS} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
