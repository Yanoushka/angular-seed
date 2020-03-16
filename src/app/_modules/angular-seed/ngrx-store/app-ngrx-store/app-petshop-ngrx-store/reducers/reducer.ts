import { Actions, ActionTypes } from '../actions/action';
import { initialState, State } from '../states/state';


export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.POST_PETS_LIST:
          return {
            ...state
          };
        }
}