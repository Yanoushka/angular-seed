import { createAction, props, Action } from '@ngrx/store';
import { Item } from 'src/app/_modules/angular-seed/petshop/models/item.model';
import { Product } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';

export enum ActionTypes {
    ADD_PET = '[Cart] Add pet to cart',
    REMOVE_PET = '[Cart] Remove pet from cart'
}

export const addPetToCart = createAction(
    ActionTypes.ADD_PET,
    props<{ product: any }>()
);

export const removePetFromCart = createAction(
    ActionTypes.REMOVE_PET,
    props<{ product: any }>()
);
