// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import data, {
  categoriesUnique,
  filterProductsByCategory,
  sumPrices,
} from "./data";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]); // Multiple categories

  // Toggle category selection
  const handleCategoryClick = (category) => {
    if (category === "All") {
      if (selectedCategories.length === categoriesUnique.length) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories(categoriesUnique); // Reset to all categories
      }
    } else if (selectedCategories.includes(category)) {
      // Deselect the category
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // Select a new category
      setSelectedCategories([category]);
    }
  };

  const filteredProducts = filterProductsByCategory(selectedCategories);
  // Calculate total price for selected products
  const totalPrice = sumPrices(filteredProducts);

  // Calculate total number of products in each category
  const categoryProductCounts = data.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="App">
      <h1>Product List</h1>

      {/* Display Categories as Buttons */}
      <h2>Unique Categories</h2>
      <div className="CategoryList">
        {/* Button to display all products */}
        <button
          className={
            selectedCategories.length === 0
              ? "category-button selected"
              : "category-button"
          }
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {categoriesUnique.map((category, index) => (
          <button
            key={index}
            className={
              selectedCategories.includes(category)
                ? "category-button selected"
                : "category-button"
            }
            onClick={() => handleCategoryClick(category)}
          >
            {category}{" "}
            <span className="badge">
              {categoryProductCounts[category] || 0}
            </span>
          </button>
        ))}
      </div>

      {/* Display total price */}
      <h2>Total Price for Selected Products: ${totalPrice.toFixed(2)}</h2>

      {/* Display Products */}
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className={`product-item ${product.units === 0 ? "disabled" : ""}`}
          >
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-units">Units: {product.units}</p>
            <p className="product-rating">
              Rating: {"★".repeat(Math.round(product.rating))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
