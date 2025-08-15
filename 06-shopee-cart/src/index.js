import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log(" \n Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 2 );
const item2 = await createItem("hotwheels burgati", 39.99, 4 );

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1 );

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);
