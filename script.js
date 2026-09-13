let storeInfo = {
    name : prompt("Enter the store name:"),
    taxRate :  Number(prompt("Enter the stores tax rate:")),
    tableFee :  Number(prompt("Enter the stores table fee:"))
}

console.log("Welcome to " + storeInfo.name + ". The tax rate is " + storeInfo.taxRate + " and the table fee is " + storeInfo.tableFee + ".");

receiptItems = [];
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

total = 0;
for (items in receiptItems){
    console.log(receiptItems[items].name + " -- $" + receiptItems[items].price);
    total += receiptItems[items].price;

}
console.log("Total: $" + total);