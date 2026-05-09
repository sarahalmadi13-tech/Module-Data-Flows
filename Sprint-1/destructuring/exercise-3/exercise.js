let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
//print out the receipt for this order
console.log("QTY     ITEM                TOTAL");
//Looping with destructuring
let grandTotal = 0;
//object destructuring inside the loop
for (let { itemName, quantity, unitPricePence } of order) {
  //total is the total price for that line in euros (because we divide pence by 100).
  let total = (quantity * unitPricePence) / 100;
  //Formatting each line
  //Adding colomn names and their width
  console.log(
    `${String(quantity).padEnd(7)}${itemName.padEnd(20)}${total.toFixed(2)}`
  );

  grandTotal += total;
}

console.log(`\nTotal: ${grandTotal.toFixed(2)}`);
