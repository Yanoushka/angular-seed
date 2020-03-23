import { createAction, props } from '@ngrx/store';

import { Product } from 'src/app/_modules/angular-breed/e-cart/app-e-cart/models/product.model';

interface CartProduct extends Product<any> {}

export enum ActionTypes {
    ADD_PRODUCT = '[Cart] Add item to cart',
    REMOVE_PRODUCT = '[Cart] Remove item from cart'
}

export const addProductToCart = createAction(
    ActionTypes.ADD_PRODUCT,
    props<{ product: CartProduct }>()
);

export const removeProductFromCart = createAction(
    ActionTypes.REMOVE_PRODUCT,
    props<{ product: CartProduct }>()
);
