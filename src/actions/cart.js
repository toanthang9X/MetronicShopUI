export const addNewCart = (cart) => {
    return {
        type: 'ADD_CART',
        payload: cart,
    }
}

export const removeCart = (cart) => {
    return {
        type: 'REMOVE_CART',
        payload: cart,
    }
}
export const increaseCart = (cart) => {
    return {
        type: 'INCREASE_CART',
        payload: cart,
    }
}
export const decreaseCart = (cart) => {
    return {
        type: 'DECREASE_CART',
        payload: cart,
    }
}