// Dynamically add student info to the page
const studentInfo = document.getElementById('student-info');
studentInfo.textContent = 'Student ID: 1268166 | Name: Rowan McClinchey'; // My info

// Pizza class definition
class Pizza {
  constructor(name, phone, address, size, toppings, crust, instructions) {
    this.name = name; // Customer's name
    this.phone = phone; // Customer's phone number
    this.address = address; // Delivery address
    this.size = size; // Pizza size (small, medium, large)
    this.toppings = toppings; // Array of selected toppings
    this.crust = crust; // Crust type
    this.instructions = instructions; // Special instructions
  }

  // Method to display pizza details in a formatted string
  displayDetails() {
    return `
      <strong>Name:</strong> ${this.name}<br>
      <strong>Phone:</strong> ${this.phone}<br>
      <strong>Address:</strong> ${this.address}<br>
      <strong>Size:</strong> ${this.size}<br>
      <strong>Toppings:</strong> ${this.toppings.join(', ')}<br>
      <strong>Crust:</strong> ${this.crust}<br>
      <strong>Special Instructions:</strong> ${this.instructions}
    `;
  }

  // Method to calculate the total price of the pizza
  calculatePrice() {
    let basePrice = 0; // Base price based on size
    switch (this.size) {
      case 'small':
        basePrice = 8;
        break;
      case 'medium':
        basePrice = 10;
        break;
      case 'large':
        basePrice = 12;
        break;
      default:
        basePrice = 10;
    }

    const toppingsPrice = this.toppings.length * 1.5; // $1.50 per topping
    const totalPrice = basePrice + toppingsPrice; // Total price

    return totalPrice.toFixed(2); // Round to 2 decimal places
  }
}

// Add event listener to the form for submission
document.getElementById('pizza-order-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Capture form values
  const name = document.getElementById('name').value; // Customer's name
  const phone = document.getElementById('phone').value; // Customer's phone
  const address = document.getElementById('address').value; // Delivery address
  const size = document.querySelector('input[name="size"]:checked').value; // Selected size
  const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(el => el.value); // Selected toppings
  const crust = document.querySelector('input[name="crust"]:checked').value; // Selected crust
  const instructions = document.getElementById('instructions').value; // Special instructions

  // Create a Pizza object with the captured values
  const pizzaOrder = new Pizza(name, phone, address, size, toppings, crust, instructions);

  // Display the order details and price
  const orderDetails = pizzaOrder.displayDetails(); // Get formatted details
  const totalPrice = pizzaOrder.calculatePrice(); // Calculate total price

  // Update the HTML with the order details
  const orderOutput = document.getElementById('order-output'); // Output section
  const orderDetailsElement = document.getElementById('order-details'); // Details element
  const orderPriceElement = document.getElementById('order-price'); // Price element

  orderDetailsElement.innerHTML = orderDetails; // Insert details
  orderPriceElement.textContent = `Total Price: $${totalPrice}`; // Insert price
  orderOutput.classList.remove('hidden'); // Show the output section
});