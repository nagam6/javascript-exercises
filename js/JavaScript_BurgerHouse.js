// 1. DATA SETUP

const restaurantName = "JavaScript Burger House";

const menu = [
  { id: 1, name: "Burger", category: "Food", price: 35, available: true },
  { id: 2, name: "Pizza", category: "Food", price: 50, available: true },
  { id: 3, name: "Cola", category: "Drink", price: 8, available: true },
  { id: 4, name: "Orange Juice", category: "Drink", price: 12, available: false },
  { id: 5, name: "Ice Cream", category: "Dessert", price: 15, available: true },
  { id: 6, name: "Salad", category: "Food", price: 25, available: true },
  { id: 7, name: "Cake", category: "Dessert", price: 22, available: true },
  { id: 8, name: "Coffee", category: "Drink", price: 10, available: true },
];

const customer = {
  name: "Asil",
  budget: 120,
  isStudent: true,
};

const order = [1, 3, 5];

let orderStatus = "Pending";


// 2. DISPLAY MENU

function displayMenu() {
  for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    let availability = item.available ? "Available" : "Not Available";

    console.log(
      `${item.id} - ${item.name} - ${item.category} - ${item.price} NIS - ${availability}`
    );
  }
}


function getAvailableItems() {
  return menu.filter(function (item) {
    return item.available === true;
  });
}


function findItemById(id) {
  let item = menu.find(function (item) {
    return item.id === id;
  });

  if (item) {
    return item;
  }

  return "Item not found";
}


// 3. ORDER LOGIC

function getOrderItems() {
  return order.map(function (id) {

    // Search menu for the item with the same ID
    let foundItem = menu.find(function (item) {
      return item.id === id;
    });
    // Return the found object
    return foundItem;
  });
}


function validateOrder() {
  for (let i = 0; i < order.length; i++) {
    let item = menu.find(function (menuItem) {
      return menuItem.id === order[i];
    });

    if (!item) {
      console.log("This item does not exist.");
      orderStatus = "Rejected";
      return false;
    }

    if (item.available === false) {
      console.log("Sorry, this item is currently not available.");
      orderStatus = "Rejected";
      return false;
    }
  }

  orderStatus = "Approved";
  return true;
}


// 4. PAYMENT AND DISCOUNT

function calculateTotal() {
  // Get all ordered items as full objects
  let orderItems = getOrderItems();

  // Start total from 0
  let totalPrice = orderItems.reduce(function (total, item) {
    let newTotal = total + item.price;
    return newTotal;
  }, 0);

  return totalPrice;
}


function applyDiscount(total) {
  let discountPercentage = 0;

  if (total > 150) {
    discountPercentage = 20;
  } else if (total > 100) {
    discountPercentage = 15;
  } else if (customer.isStudent) {
    discountPercentage = 10;
  }

  let discountAmount = total * discountPercentage / 100;
  let finalTotal = total - discountAmount;

  return {
    originalTotal: total,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    finalTotal: finalTotal,
  };
}


function canCustomerPay(finalTotal) {
  if (customer.budget >= finalTotal) {
    return true;
  }

  return false;
}


// 5. PRINT RECEIPT

function printReceipt(discountInfo) {
  let orderItems = getOrderItems();
  let paymentStatus;

  if (canCustomerPay(discountInfo.finalTotal)) {
    paymentStatus = "Paid Successfully";
    orderStatus = "Paid";
  } else {
    paymentStatus = "Not Enough Money";
    orderStatus = "Rejected";
  }

  console.log("========== RECEIPT ==========");
  console.log(`Restaurant: ${restaurantName}`);
  console.log(`Customer: ${customer.name}`);
  console.log("Items:");

  for (let i = 0; i < orderItems.length; i++) {
    console.log(`- ${orderItems[i].name}: ${orderItems[i].price} NIS`);
  }

  console.log(`Original Total: ${discountInfo.originalTotal} NIS`);
  console.log(`Discount: ${discountInfo.discountPercentage}%`);
  console.log(`Discount Amount: ${discountInfo.discountAmount} NIS`);
  console.log(`Final Total: ${discountInfo.finalTotal} NIS`);
  console.log(`Customer Budget: ${customer.budget} NIS`);
  console.log(`Payment Status: ${paymentStatus}`);
  console.log(`Order Status: ${orderStatus}`);
  console.log("=============================");
}


// 6. MAIN PROGRAM FLOW

displayMenu();

console.log("Available Items:");
console.log(getAvailableItems());

console.log("Order Items:");
console.log(getOrderItems());

let isValid = validateOrder();

if (isValid) {
  let total = calculateTotal();
  let discountInfo = applyDiscount(total);
  let canPay = canCustomerPay(discountInfo.finalTotal);

  printReceipt(discountInfo);
} else {
  console.log("Order stopped because it is invalid.");
}


// BONUS 1 — Count Items by Category

function countItemsByCategory() {
  let orderItems = getOrderItems();

  return orderItems.reduce(function (count, item) {
    count[item.category] = (count[item.category] || 0) + 1;
    return count;
  }, {});
}

console.log(countItemsByCategory());


// BONUS 2 — Most Expensive Ordered Item

function getMostExpensiveItem() {
  let orderItems = getOrderItems();
  let mostExpensive = orderItems[0];

  for (let i = 1; i < orderItems.length; i++) {
    if (orderItems[i].price > mostExpensive.price) {
      mostExpensive = orderItems[i];
    }
  }

  return `Most expensive item: ${mostExpensive.name} - ${mostExpensive.price} NIS`;
}

console.log(getMostExpensiveItem());


// BONUS 3 — Add Quantity

const orderWithQuantity = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
  { id: 5, quantity: 3 },
];

function calculateTotalWithQuantity() {
  let total = 0;

  for (let i = 0; i < orderWithQuantity.length; i++) {
    let orderItem = orderWithQuantity[i];

    let item = menu.find(function (menuItem) {
      return menuItem.id === orderItem.id;
    });

    let itemTotal = item.price * orderItem.quantity;

    console.log(`${item.name} x${orderItem.quantity} = ${itemTotal}`);

    total += itemTotal;
  }

  console.log(`Total = ${total}`);
  return total;
}

calculateTotalWithQuantity();


// BONUS 4 — Add Order Status

console.log(`Final Order Status: ${orderStatus}`);