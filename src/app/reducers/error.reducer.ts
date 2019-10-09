import { createReducer, Action, on, State } from '@ngrx/store';
import * as actions from '../actions/app.actions';

export interface ErrorState {
  errorExists: boolean;
  errorMessage: string;
}

const initialState: ErrorState = {
  errorExists: false,
  errorMessage: 'this should not be seen'
};

const myReducer = createReducer(
  initialState,
  on(actions.applicationFeatureError, (state, action) =>
    ({ errorExists: true, errorMessage: action.message })),
  on(actions.clearApplicationFeatureError, () => initialState)
);

export function reducer(state: ErrorState = initialState, action: Action): ErrorState {
  // can't modify state or action at all
  return myReducer(state, action);
}

