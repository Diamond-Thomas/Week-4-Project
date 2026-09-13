let storeInfo = {
    name : prompt("Enter the store name:"),
    taxRate : prompt("Enter the stores tax rate:"),
    tableFee : prompt("Enter the stores table fee:")
}

Console.log("Welcome to " + storeInfo.name + ". The tax rate is " + storeInfo.taxRate + " and the table fee is " + storeInfo.tableFee + ".");