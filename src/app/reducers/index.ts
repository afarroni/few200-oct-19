import * as fromCounter from './counter.reducer';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  // "reducer map"
  counter: fromCounter.reducer
};

// selector functions
// pattern:
// 1. create a feature selector
// 2. create a selector for each branch of the application state
const selectCounterBranch = (state: AppState) => state.counter;
// 3. helpers
// 4. for the components

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.count);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);
// given current count of the counter, disable the reset button
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);

