import { postItemsList } from '../actions/action';
import { initialState } from '../states/state';
import { createReducer, on } from '@ngrx/store';

const _petsReducer = createReducer(
    initialState,
    on(postItemsList, (state, payload) => {
        const myState = { ...state };
        myState.itemsList = [...myState.itemsList, ...payload.itemsList];

        return myState;
    })
);

// tslint:disable-next-line: only-arrow-functions
export function petsReducer(state, action) {
    return _petsReducer(state, action);
}
