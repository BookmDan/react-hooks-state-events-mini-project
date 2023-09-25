import React, {useState} from "react";
import { CATEGORIES } from "../data";

function NewTaskForm(onTaskFormSubmit) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState(CATEGORIES[0])
  
  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text,
      category,
      id: Math.random().toString()
    }

    onTaskFormSubmit(newTask)

    setText("")
    setCategory(CATEGORIES[0])
  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
            {category}
            </option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
