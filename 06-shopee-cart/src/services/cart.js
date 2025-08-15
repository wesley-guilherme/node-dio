//quais ações o meu carrinho pode fazer:

//caso de uso
// ✅-> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
console.log(" \n Shopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);  
  console.log(`🎁 Total: ${result}`);  
}

// -> deletar item no carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover um item - diminui um item
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name)
  
  if(indexFound == -1) {
    console.log("Item Não encontrado");
    return;
  }

  if(userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
  // const deleteIndex = index - 1;


  //   if (index >= 0 && index < userCart, index) {
  //     userCart.splice(deleteIndex, 1);
  //   }
}

async function displayCart(userCart) {
  console.log(" \n Shopee cart list:")
  userCart.forEach((item, index) => { 
    console.log(`${index + 1}. ${item.name} - R${item.price} |
      ${item.quantity}x | Subtotal = ${item.subtotal()}`);
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
