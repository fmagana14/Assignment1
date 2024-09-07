// import logo from './logo.svg';
import './App.css';
import React from 'react';
import data, { namesAndCategories, categoriesUnique } from './data';
function App() {
  console.log(namesAndCategories);


  return (
    <div className="App">
      <h1>Product List</h1>

      {/* Challenge 8 - Display Categories as Buttons */}
      <h2>Unique Categories</h2>
      <div>
        {categoriesUnique.map((category, index) => (
          <button key={index} className="category-button">
            {category}
          </button>
        ))}
      </div>

      {/* Challenge 9 - Display Products */}
      <h2>Product List</h2>
      <ul className="product-list">
        {data.map(product => (
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


