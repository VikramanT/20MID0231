import React, { useState } from 'react';

const ProductCategoryInput = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value.trim());
  };

  return (
    <div>
      <label htmlFor="category-input">Select Category:</label>
      <input
        type="text"
        id="category-input"
        placeholder="Enter category (e.g., electronics)"
        value={category}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductCategoryInput;
