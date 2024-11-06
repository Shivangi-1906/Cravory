// Function to update the item count in the cart icon
function updateCartItemCount() {
    const cartItemCount = Object.keys(getCartItems()).length;
    document.getElementById('cart-item-count').innerText = cartItemCount;
  }
  
  // Call updateCartItemCount function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    updateCartItemCount();
  });
  