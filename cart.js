// Function to retrieve cart items from sessionStorage
function getCartItems() {
  const cartItems = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key.startsWith('product-')) {
      cartItems[key] = JSON.parse(sessionStorage.getItem(key));
    }
  }
  return cartItems;
}

// Function to display cart items in the table
function displayCart() {
  const cartItems = getCartItems();
  const cartTable = document.getElementById('cart-table');

  if (!cartTable) {
    console.error("Cart table element not found!");
    return;
  }

  let totalPrice = 0;
  const tbody = cartTable.querySelector('tbody');
  tbody.innerHTML = '';

  for (const key in cartItems) {
    const item = cartItems[key];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
       
      <td>${item.price * item.quantity}</td>
      <td>${item.id}</td>
      <td><button onclick="decreaseQuantity('${item.id}')">-</button> 
      <td id="quantity-${item.id}">${item.quantity}</td>
      <td><button onclick="increaseQuantity('${item.id}')">+</button></td>
      
    `;
    tbody.appendChild(row);
    totalPrice += item.price * item.quantity;
  }

  document.getElementById('total-price').innerText = `Total: ${totalPrice}`;
}

// Call displayCart() function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', displayCart);

// Function to add item to cart
function addToCart(name, price, quantity, id) {
  const item = {
    name: name,
    price: price,
    quantity: quantity,
    id: id
  };
  sessionStorage.setItem('product-' + id, JSON.stringify(item));
  console.log(item)
  displayCart();

}
  // sessionStorage.setItem('product-' + id, JSON.stringify(item));
  // // Call displayCart after adding item to update the cart view
  // displayCart();

  // Call displayCart() function when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', () => {
//   displayCart();
// });



// Call displayCart() function when the DOM content is loaded
// displayCart();
// Function to decrease quantity of an item in the cart
// Function to decrease quantity of an item in the cart
function decreaseQuantity(id) {
  const key = 'product-' + id;
  let item = JSON.parse(sessionStorage.getItem(key));
  
  if (item.quantity > 1) {
    item.quantity--; // Decrease quantity by 1
    sessionStorage.setItem(key, JSON.stringify(item));
    
    // Update quantity display
    document.getElementById('quantity-' + id).innerText = item.quantity;
  } else {
    // If quantity is already 1, remove the item from sessionStorage
    sessionStorage.removeItem(key);
    
    // Remove the row from the cart display
    const row = document.getElementById('row-' + id);
    if (row) {
      row.remove();
    } else {
      console.error("Row element not found!");
    }
  }

  // Update total price
  updateTotalPrice();
}

// Function to increase quantity of an item in the cart
function increaseQuantity(id) {
  const key = 'product-' + id;
  let item = JSON.parse(sessionStorage.getItem(key));
  
  item.quantity++; // Increase quantity by 1
  sessionStorage.setItem(key, JSON.stringify(item));
  
  // Update quantity display
  document.getElementById('quantity-' + id).innerText = item.quantity;

  // Update total price
  updateTotalPrice();
}

// Function to update total price
function updateTotalPrice() {
  const cartItems = getCartItems();
  let totalPrice = 0;
  
  for (const key in cartItems) {
    const item = cartItems[key];
    totalPrice += item.price * item.quantity;
  }

  // Update total price display
  document.getElementById('total-price').innerText = `Total: ${totalPrice}`;
}

// Function to delete an item from the cart
