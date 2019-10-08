import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  count: number;
  by: number;
}

const initialState: CounterState = {
  count: 0,
  by: 1
};

const myReducer = createReducer(
  initialState,
  on(actions.countDecremented, (state) => ({ count: state.count - state.by, by: state.by })),
  on(actions.countIncremented, (state) => ({ count: state.count + state.by, by: state.by })),
  on(actions.countReset, (state) => initialState),
  on(actions.countBySet, (state, action) => ({ count: state.count, by: action.by }))
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // can't modify state or action at all
  return myReducer(state, action);

  // do the logic and new state creation on actions
  // switch (action.type) {
  //   case 'increment': {
  //     return {
  //       count: state.count + 1
  //     };
  //   }
  //   case 'decrement': {
  //     return {
  //       count: state.count - 1
  //     };
  //   }
  //   case 'reset': {
  //     return initialState;
  //   }
  //   default: {
  //     return state;
  //   }
  // }
}
