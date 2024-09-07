// import logo from './logo.svg';
import './App.css';
import React from 'react';
import data, {categoriesUnique, categoriesWithCounts, namesAndCategories} from './data';
function App() {
  console.log(namesAndCategories);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> */}
     <h1>Product List</h1>
      <ul>
        {data.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Units: {product.units}</p>
          </li>
        ))}
      </ul>

      {/* <h2>All Categories</h2>
      <ul>
        {allCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul> */}

      <h2>Unique Categories</h2>
      <ul>
        {categoriesUnique.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <h2>Category Counts</h2>
      <ul>
        {Object.entries(categoriesWithCounts).map(([category, count]) => (
          <li key={category}>{category}: {count}</li>
        ))}
      </ul>

{/* challenge 5 */}
      <h2>Categories with Counts</h2>
      <ul>
        {namesAndCategories.map((item, index) => (
          <li key={index}>
            {item.name}: {item.count}
          </li>
        ))}
      </ul>
      

      
    </div>
  );
}

export default App;
