let storeInfo = {
    name : prompt("Enter the store name:"),
    taxRate :  Number(prompt("Enter the stores tax rate:")),
    tableFee :  Number(prompt("Enter the stores table fee:"))
}

console.log("Welcome to " + storeInfo.name + ". The tax rate is " + storeInfo.taxRate + " and the table fee is " + storeInfo.tableFee + ".");

let receiptItems = [];
let addItem = true;
while(addItem == true){
    let choice = prompt("Press y to add an item and any other key to exit.");

    if(choice == "y" || choice == "Y"){ 
        let itemName = prompt("Enter item name:");
        let itemPrice = Number(prompt("Enter item price:"));
        receiptItems.push({
            name: itemName,
            price: itemPrice
        });
    } else {
        addItem = false;
    }


}

console.log("Number of items added: ", receiptItems.length);
console.log("Receipt Items: ", receiptItems);

let total = 0;
for (items in receiptItems){
    console.log(receiptItems[items].name + " -- $" + receiptItems[items].price);
    total += receiptItems[items].price;

}
console.log("Total: $" + total);

console.log("Removing the last item from the receipt...");
let removedItem = receiptItems.pop();
console.log("Removed item: ", removedItem);
let newTotal = total - removedItem.price;
let taxed = (newTotal/100) * storeInfo.taxRate;
let finalTotal = newTotal + taxed + storeInfo.tableFee;


console.log("Updated Subtotal: $" + newTotal.toFixed(2));
console.log("Tax Amount: $" + taxed.toFixed(2));
console.log("Table Fee: $" + storeInfo.tableFee.toFixed(2));
console.log("Final Bill: $" + finalTotal.toFixed(2));