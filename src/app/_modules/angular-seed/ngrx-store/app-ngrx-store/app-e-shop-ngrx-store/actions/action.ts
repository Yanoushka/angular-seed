import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    POST_PETS_LIST = '[EShop] Post Pets List'
}

export const postItemsList = createAction(
    ActionTypes.POST_PETS_LIST,
    props<{ itemsList: Array<any> }>()
);
