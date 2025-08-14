import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 2 );
const item2 = await createItem("hotwheels burgati", 39.99, 3 );

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.deleteItem(myCart, item2.name);


console.log("Shopee Cart TOTAL IS:");
await cartService.calculateTotal(myCart);
