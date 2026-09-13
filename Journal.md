### Instead of putting all the store details into a single storeInfo object, you could have saved each detail in its own standalone global variable. What are the advantages of grouping related data into an object versus managing separate variables?

One advantage grouping related data into an object has is that it makes it easier to understand what the data is connected to. If you where to have multiple objects that you needed the user to create a name for, having to create multiple bindings names to store the values into would be more tedious that simply creating one object and puting all the data in that object.

### What happens if you set a value to a property of an object that didn’t exist before? How does that effect the ways that you can create and set object properties?

if you set a value to a property of an object that didn’t exist before java script will add that property to the object along with the value. this effects the ways that you can create and set object properties because this means that you don't have to set everything up at the initialization and you can add properties as the user goes through the code and add on based on the imput from the user.

### Reflect on using the for...of loop to move through your list. How did you target and pull out just the price property from each item object inside the loop?

In order to calculate the total I creating a "total" variable that had a value of 0 in it before the loop started then when the loop started I took the price of every item and added it to the "total" until the loop was finished and that all added up to be the same variable with a value equivalent to the total price.

