import { Action } from '@ngrx/store';

export enum ActionTypes {
    POST_PETS_LIST = '[Petshop] Post Pets List',
  }

export class PostPetsListAction implements Action {
  readonly type = ActionTypes.POST_PETS_LIST;
  constructor(public payload: []) {}
}

export type Actions = PostPetsListAction;
