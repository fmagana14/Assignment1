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
const categoriesWithCounts = data.reduce((obj, item) => {
  const category = item.category;
  if (obj[category]) {
    obj[category] += 1; // Increment count if the category already exists
  } else {
    obj[category] = 1; // Initialize count if the category is new
  }
  return obj;
}, {}); // Initialize as an empty object

const namesAndCategories = categoriesUnique.map(name => {
  // return an object here with the name and count
  return {
    name: name,
    count: categoriesWithCounts[name]
  }

})

// Function to filter products by category
const filterProductsByCategory = (category) => {
  return data.filter(item => category === 'All' || item.category === category);
};


// Export the data so it can be used in other files
export { data as default, filterProductsByCategory, allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories };
