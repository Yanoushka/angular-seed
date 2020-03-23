import { createAction, props } from '@ngrx/store';

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
