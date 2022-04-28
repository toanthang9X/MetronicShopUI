function cartReducer( cart = [], action) {
  switch (action.type) {
      case 'ADD_CART': {
        const tempcart = cart.filter((item) => item.id === action.payload.id)
        if(tempcart < 1) {
          return [...cart, action.payload]
        }
        // else 
        // return cart;
      }
      break
      case 'REMOVE_CART': {
        const idCart = action.payload.id;
        return cart.filter(item => item.id !== idCart)
      }
      case 'INCREASE_CART': {
        const tempcart = cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return tempcart;
      }
      break
      case 'DECREASE_CART': {
        const tempcart = cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return tempcart;
      }
      break
      default:
        return cart;
  }
  // if (action.type === "ADD_CART") {
  //   let tempcart = cart.filter((item) => item.id === action.payload.id);
  //   if (tempcart < 1) {
  //     return [...cart, action.payload];
  //   } else {
  //     return cart;
  //   }
  // }
  // if (action.type === "REMOVE_CART") {
  //   return cart.filter((item) => item.id !== action.payload.id);
  // }
  // if (action.type === "INCREASE_CART") {
  //   let tempcart = cart.map((item) => {
  //     if (item.id === action.payload.id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     return item;
  //   });
  //   return tempcart;
  // }
  // if (action.type === "DECREASE") {
  //   let tempcart = cart.map((item) => {
  //     if (item.id === action.payload.id) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     }
  //     return item;
  //   });
  //   return tempcart;
  // }
  // return cart;
}

export default cartReducer