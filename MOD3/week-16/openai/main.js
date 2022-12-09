
// Get the button and the form
const addProductButton = document.getElementById('addProductButton');
const addProductForm = document.getElementById('addProductForm');

// Add an event listener to the button that will run a function
// when the button is clicked
addProductButton.addEventListener('click', function() {
  // Show the form
  addProductForm.style.display = 'block';
});

// Get the products list
const productsList = document.getElementById('products');

// Add an event listener to the form that will run a function
// when the form is submitted
addProductForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

// Get the product name and price from the form
const name = document.getElementById('name').value
const priceString = document.getElementById('price').value

// Convert the price string to a floating-point number
const price = parseFloat(priceString)

// Create the new product
const newProduct = document.createElement('li')
newProduct.innerHTML = `
    ${name} - $${price.toFixed(2)}
    <button class="deleteButton">Delete</button>
  `


  // Add the new product to the page
  productsList.appendChild(newProduct);
});

// Add an event listener to the products list that will run a function
// when a "Delete" button is clicked
productsList.addEventListener('click', function(event) {
  // If the clicked element is a "Delete" button, delete the product
  if (event.target.className === 'deleteButton') {
    const productToDelete = event.target.parentElement;
    productsList.removeChild(productToDelete);
  }
});
