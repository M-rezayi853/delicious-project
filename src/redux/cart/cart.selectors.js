import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectHiddenCart = createSelector(
    [selectCart],
    cart => cart.hiddenCart
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 
        0
    )
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity * cartItem.price,
        0
    )
);