import { createAction, props } from '@ngrx/store';

import { Product } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';

export enum ActionTypes {
    ADD_PET = '[Cart] Add pet to cart',
    REMOVE_PET = '[Cart] Remove pet from cart'
}

export const addPetToCart = createAction(
    ActionTypes.ADD_PET,
    props<{ product: Product }>()
);

export const removePetFromCart = createAction(
    ActionTypes.REMOVE_PET,
    props<{ product: Product }>()
);
