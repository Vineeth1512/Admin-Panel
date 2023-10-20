import React, { useState } from 'react'

function AddNewCategory(props) {
  const [newCategory, setNewCategory] = useState(''); // Initialize with an empty string
  const handleFormChange = (e) => {
    const category = e.target.value;
    setNewCategory(category); // Update newCategory state with the category input
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCategory.trim() === '') {
      alert('Category name cannot be empty.');
      return;
    }
    props.onAddCategory(newCategory);
    setNewCategory('');
  };

  return (
    <>
      <div >
        <h2>Product Categories</h2>
        <div class="form-category">
          <form onSubmit={handleSubmit}>
            <label for="productcat">Category Name</label>
            <input type="text" id="productcat"
              name="category"
              value={newCategory.category}
              onChange={handleFormChange}
            />
            <button className="btn" type="submit">Add Category</button>
            <button className="btn" type="button" onClick={() => setNewCategory('')}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddNewCategory