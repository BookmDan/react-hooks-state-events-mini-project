import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")

  const handleDetailChange = (e) => {
    setDetails(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    // Create a new task object
    const newTask = {
      text: details,
      category: category,
      id: Math.random().toString(), // Generate a unique ID (replace with a proper ID generation mechanism)
    };
    onTaskFormSubmit(newTask);
    // console.log(newTask)
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories.map(category=> (
          <option key={category.id}>{category} </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
