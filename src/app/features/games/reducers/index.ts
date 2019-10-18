import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { GameItemModel } from '../models';
export const featureName = 'gamesFeature';

export interface GamesFeatureState {
  gameList: fromList.GameState;
}

export const reducers: ActionReducerMap<GamesFeatureState> = {
  gameList: fromList.reducer
};

// 1. Feature Selector
const selectGameFeature = createFeatureSelector<GamesFeatureState>(featureName);

// 2. Selector per branch
const selectGameList = createSelector(selectGameFeature, g => g.gameList);

// 3. Helpers
// const { selectAll: selectBookEntityArray } = fromList.adapter.getSelectors(selectListBranch);
const { selectAll: selectGameListArray } = fromList.adapter.getSelectors(selectGameList);
// deconstructor to get entity array


// 4. For our components
export const selectGameListModel = createSelector(selectGameListArray, g => (g as GameItemModel[]));
