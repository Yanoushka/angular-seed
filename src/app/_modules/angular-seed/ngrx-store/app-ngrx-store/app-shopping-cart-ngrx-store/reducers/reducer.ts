import { createReducer, on } from '@ngrx/store';

import { addPetToCart, removePetFromCart } from '../actions/action';
import { initialState } from '../states/state';

const _cartReducer = createReducer(
    initialState,
    on(addPetToCart, (state, payload) => {
        const myState = { ...state };
        myState.cart = [...myState.cart, payload];

        return myState;
    }),
    on(removePetFromCart, (state, payload) => {
        const myState = { ...state };
        myState.cart = [...myState.cart, payload];

        return myState;
    })
);

// tslint:disable-next-line: only-arrow-functions
export function cartReducer(state, action) {
    return _cartReducer(state, action);
}
