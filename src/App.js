// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import data, { categoriesUnique } from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = data.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="App">
      <h1>Product List</h1>

      {/* Challenge 8 - Display Categories as Buttons */}
      <h2>Unique Categories</h2>
      <div className="CategoryList">
        <button
        //  className={selectedCategory === 'All' ? 'category-button selected' : 'category-button'}
          className="category-button"
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        {categoriesUnique.map((category, index) => (
          <button
            key={index}
            // x className={selectedCategory === category ? 'category-button selected' : 'category-button'}
            className="category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* display selected category */}
      <h2> Selected Category: {selectedCategory} </h2>

      {/* Challenge 9 - Display Products */}
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-category">{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
