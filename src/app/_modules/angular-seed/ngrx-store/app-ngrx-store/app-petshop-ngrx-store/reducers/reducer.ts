import { postPetsList } from '../actions/action';
import { initialState } from '../states/state';
import { createReducer, on } from '@ngrx/store';

const _petsReducer = createReducer(
    initialState,
    on(postPetsList, (state, payload) => {
        const myState = {...state};
        myState.petsList = [...myState.petsList, ...payload.petsList];

        return myState;
    })
);

// tslint:disable-next-line: only-arrow-functions
export function petsReducer(state, action) {
    return _petsReducer(state, action);
}
