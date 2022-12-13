function calculateDiscount(amount) {
    // Calculate discount based on amount used
    let discount = 0;
    if (amount >= 10000) {
      discount = 15;
    } else if (amount >= 5000 && amount <= 9999) {
      discount = 10;
    } else if (amount >= 3000 && amount <= 4999) {
      discount = 5;
    }
  
    // Calculate discounted price
    let discountedPrice = amount - (amount * (discount / 100));
  
    // Output result
    console.log("Amount spent: " + amount);
    console.log("Discount: " + (amount * (discount / 100)));
    console.log("Amount to pay after discount: " + discountedPrice);
  }
  
  // Test the function
  calculateDiscount(6000);
  
