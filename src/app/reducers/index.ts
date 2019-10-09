import * as fromCounter from './counter.reducer';
import * as fromError from './error.reducer';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
  error: fromError.ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  // "reducer map" - map is an object with properties - the properties are
  // reducer functions here, that return a state
  counter: fromCounter.reducer,
  error: fromError.reducer
};

// selector functions
// pattern:
// 1. create a feature selector
// 2. create a selector for each branch of the application state
const selectCounterBranch = (state: AppState) => state.counter;
const selectErrorBranch = (state: AppState) => state.error;
// 3. helpers
// 4. for the components

export const selectCurrentCount = createSelector(selectCounterBranch, b => b.count);
export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);
// given current count of the counter, disable the reset button
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);

export const selectErrorMessage = createSelector(selectErrorBranch, b => b.errorMessage);
export const selectErrorExists = createSelector(selectErrorBranch, b => b.errorExists);
