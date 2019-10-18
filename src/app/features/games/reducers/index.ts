import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
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
// deconstructor to get entity array


// 4. For our components
