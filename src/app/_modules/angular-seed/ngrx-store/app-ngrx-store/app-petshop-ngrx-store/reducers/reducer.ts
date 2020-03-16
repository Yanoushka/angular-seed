import { postPetsList } from '../actions/action';
import { initialState } from '../states/state';
import { createReducer, on } from '@ngrx/store';

const _petsReducer = createReducer(
    initialState,
    on(postPetsList, (state, petsList) => {
        const myPetsList = { ...state };

        return myPetsList;
    })
);

// tslint:disable-next-line: only-arrow-functions
export function petsReducer(state, action) {
    return _petsReducer(state, action);
}
