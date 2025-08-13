const {getFullName, productType} = require("./services/products");
const product = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("carinho compras:");
    
    getFullName("35", "teclado");
    product.getFullName("408", "mousepad");
    product.getFullName("45", "mouse");
    product.getProductLabel("mousepad");
    
    database.connectToDataBase(my-data);   
}

main();

