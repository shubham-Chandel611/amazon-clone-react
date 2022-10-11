export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.cost * item.quantity) + amount, 0);

const findIndex = (basket, id)=> {
  const index = basket.findIndex((basketItem) => basketItem.id === id);
  return index
}

function reducer(state, action) {
  console.log(state.basket)

  switch (action.type) {
    case "Add_to_basket":
      // logic for adding into basket

      return {
        ...state,
        basket: [...state.basket, action.item]
      };
      
     

    case "Remove_from_basket":
      // logic for removing
      let newBasket = [...state.basket];
      let index = findIndex(state.basket, action.id);

      if (index >= 0) {
        // its there and remove it
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
      

    case "quantity":
      // logic to increase quantity property of an item and updating the cost accordingly.
      let newBasket2 = [...state.basket]
      const i = findIndex(state.basket, action.id)
      state.basket[i].quantity = action.quantity;
      console.log(state.basket)
      //changing the cost accorging to the quantity
      const initialCost =state.basket[i].cost;
      state.basket[i].newCost = initialCost * state.basket[i].quantity; 
      return {...state,basket:newBasket2}
    default:
      return state;
  }
}

export default reducer;
