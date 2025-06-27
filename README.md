# Dynamic Shopping Cart


## Features

 Add items to the cart with name and price
 Dynamically display items in a list
 Remove items from the cart instantly
 Update total price on every action
 Validates user input before adding


## Tech Used

 HTML5
 CSS
 JavaScript (Vanilla)


### How did you dynamically create and append new elements to the DOM?

Each time a product gets added, I use `document.createElement()` to build the new list item, then add content to it with `innerHTML`. After that, I attach it to the cart using `appendChild()`. That’s how each item shows up in the cart.


### What steps did you take to ensure accurate updates to the total price?

Every time a product is added or removed, the price value is passed to a function that updates the total. I use `.toFixed(2)` to make sure the total always shows as proper currency format. I also make sure to subtract the exact same value on remove, using `dataset.price`.


### How did you handle invalid input for product name or price?

I added a basic check before anything is added to the cart. If the product name is blank or the price isn’t a valid number greater than 0, the app stops and gives an alert. It prevents invalid data from breaking the flow or messing with totals.


### What challenges did you face when implementing the remove functionality?

Biggest thing was making sure the remove button targets the exact item it came from. I used `closest('li')` to get the right parent element and then accessed the stored price through `dataset.price` so the total could update correctly. Clean and simple once it was set up.


## Optional Improvements

 Add support for item quantity and live total updates per unit
 Store the cart in localStorage to keep data on refresh
 Add styling framework or animations for smoother user experience


## Getting Started

1. Clone this repo  
2. Open `index.html` in your browser  
3. Add, remove, and track items in real time  


