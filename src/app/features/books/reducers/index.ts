import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as fromModels from '../models';
export const featureName = 'booksFeature';

export interface BooksFeatureState {
  list: fromList.BookState;
}

export const reducers: ActionReducerMap<BooksFeatureState> = {
  list: fromList.reducer
};

// 1. Feature Selector
const selectBooksFeature = createFeatureSelector<BooksFeatureState>(featureName);

// 2. Selector per branch
const selectListBranch = createSelector(selectBooksFeature, b => b.list);

// 3. Helpers
const { selectAll: selectBookEntityArray } = fromList.adapter.getSelectors(selectListBranch);

// 4. For our components
export const selectBookListItemModel = createSelector(selectBookEntityArray, books => (books as fromModels.BookListItemModel[]));
//  -- Need an BookListItemModel[] for the list.
