import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as fromOnLoan from './loan.reducer';
import { GameItemModel } from '../models';
export const featureName = 'gamesFeature';

export interface GamesFeatureState {
  gameList: fromList.GameState;
  loanList: fromOnLoan.LoanState;
}

export const reducers: ActionReducerMap<GamesFeatureState> = {
  gameList: fromList.reducer,
  loanList: fromOnLoan.reducer
};

// 1. Feature Selector
const selectGameFeature = createFeatureSelector<GamesFeatureState>(featureName);

// 2. Selector per branch
const selectGameList = createSelector(selectGameFeature, g => g.gameList);
const selectOnLoanList = createSelector(selectGameFeature, g => g.loanList);

// 3. Helpers
const { selectAll: selectGameListArray } = fromList.adapter.getSelectors(selectGameList);
const { selectAll: selectLoanListArray } = fromOnLoan.adapter.getSelectors(selectOnLoanList);
// deconstructor to get entity array

// 4. For our components
export const selectGameListModel = createSelector(selectGameListArray, g => (g as GameItemModel[]));
export const selectLoanListModel = createSelector(selectLoanListArray, l => (l as GameItemModel[]));
