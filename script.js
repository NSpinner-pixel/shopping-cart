// Grab input fields and elements
const nameField = document.getElementById('item-name');
const priceField = document.getElementById('item-price');
const quantityField = document.getElementById('item-quantity');
const addButton = document.getElementById('add-to-cart');
const cartList = document.getElementById('shopping-cart');
const totalPriceDisplay = document.getElementById('cart-total');

let totalCost = 0;

// Helper to update total cost display
function refreshTotal() {
  let sum = 0;
  const items = cartList.querySelectorAll('.cart-item');
  items.forEach(item => {
    const price = parseFloat(item.dataset.unitPrice);
    const qty = parseInt(item.querySelector('.qty-input').value);
    sum += price * qty;
  });
  totalCost = sum;
  totalPriceDisplay.textContent = totalCost.toFixed(2);
}

// Remove item from cart and recalculate total
function handleRemove(e) {
  const listItem = e.target.closest('li');
  listItem.remove();
  refreshTotal();
}

// Handle quantity changes, enforce minimum 1, and recalc total
function handleQuantityChange(e) {
  let newQty = parseInt(e.target.value);
  if (isNaN(newQty) || newQty < 1) {
    newQty = 1;
    e.target.value = newQty;
  }
  refreshTotal();
}

// Add new product to cart after validation
function addProduct() {
  const productName = nameField.value.trim();
  const productPrice = parseFloat(priceField.value);
  const productQuantity = parseInt(quantityField.value);

  if (!productName) {
    alert('Please enter a product name.');
    return;
  }
  if (isNaN(productPrice) || productPrice <= 0) {
    alert('Please enter a valid positive price.');
    return;
  }
  if (isNaN(productQuantity) || productQuantity < 1) {
    alert('Please enter a quantity of at least 1.');
    return;
  }

  // Create cart item
  const listItem = document.createElement('li');
  listItem.classList.add('cart-item');
  listItem.dataset.unitPrice = productPrice;

  listItem.innerHTML = `
    <span>${productName} — $${productPrice.toFixed(2)} each</span>
    <input type="number" class="qty-input" min="1" value="${productQuantity}" />
    <button class="remove-btn">Remove</button>
  `;

  // Event listeners for new item
  listItem.querySelector('.remove-btn').addEventListener('click', handleRemove);
  listItem.querySelector('.qty-input').addEventListener('change', handleQuantityChange);

  // Add to DOM and update total
  cartList.appendChild(listItem);
  refreshTotal();

  // Clear input fields
  nameField.value = '';
  priceField.value = '';
  quantityField.value = '1';
}

// Attach event listener to add button
addButton.addEventListener('click', addProduct);
