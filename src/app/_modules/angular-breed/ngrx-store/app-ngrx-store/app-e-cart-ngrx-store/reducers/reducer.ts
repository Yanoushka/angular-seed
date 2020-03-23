import { createReducer, on } from '@ngrx/store';

import { addProductToCart, removeProductFromCart } from '../actions/action';
import { initialState } from '../states/state';

const _cartReducer = createReducer(
    initialState,
    on(addProductToCart, (state, productToAdd) => {
        const productsInCart = JSON.parse(JSON.stringify(state.cart));
        const matchedProductInCart = productsInCart.find(
            product => product.payload.id === productToAdd.product.payload.id
        );

        if (!!matchedProductInCart) {
            matchedProductInCart.quantity += productToAdd.product.quantity;
        } else {
            productsInCart.push(productToAdd.product);
        }

        return { cart: productsInCart };
    }),
    on(removeProductFromCart, (state, productToRemove) => {
        const productsInCart = JSON.parse(JSON.stringify(state.cart));
        const updatedProductsInCart = productsInCart.filter(
            product => product.payload.id !== productToRemove.product.payload.id
        );

        return { cart: updatedProductsInCart };
    })
);

// tslint:disable-next-line: only-arrow-functions
export function cartReducer(state, action) {
    return _cartReducer(state, action);
}
