import React, {useState} from "react";
// import { CATEGORIES } from "../data"

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >{category} </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
