import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  POST_PETS_LIST = '[Petshop] Post Pets List',
}

export const postPetsList = createAction(
  ActionTypes.POST_PETS_LIST,
  props<{ petsList: Array<any> }>()
);
