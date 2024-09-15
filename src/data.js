// Import the JSON data with the 'type' attribute
import data from './data.json';

// // Create an array of all categories
const allCategories = data.map(obj => obj.category)


// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
  obj[cat] = 0
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!

// Make an array of the keys
const categoriesUnique = Object.keys(categoryObjects)

// Make a histogram of category counts
// Function to filter products by selected categories
const filterProductsByCategory = (selectedCategories) => {
  return data.filter(item => selectedCategories.includes(item.category));
};

// Function to calculate total prices of products
const sumPrices = (products) => {
  return products.reduce((sum, item) => {
    const price = parseFloat(item.price.slice(1)); // Remove $ and parse price
    return sum + price;
  }, 0);
};



// Export the data so it can be used in other files
export { data as default, categoriesUnique, filterProductsByCategory, sumPrices };
