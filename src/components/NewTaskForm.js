import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]); // Default to "All" category

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      text,
      category,
      id: Math.random().toString(), // Generate a unique ID (replace with a proper ID generation mechanism)
    };

    // Pass the new task to the parent component
    onTaskFormSubmit(newTask);

    // Reset the form
    setText("");
    setCategory(CATEGORIES[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => (
            category !== "All" ? (
            <option key={category}>
              {category}
            </option>
          ) : null
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
