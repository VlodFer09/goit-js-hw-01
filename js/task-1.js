function makeTransation(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  let message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return message;
}
console.log(makeTransation(5, 3000));
console.log(makeTransation(3, 1000));
console.log(makeTransation(10, 500));
