import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import * as fromModels from '../models';
import * as fromSorter from './sort.reducer';
export const featureName = 'booksFeature';

export interface BooksFeatureState {
  list: fromList.BookState;
  sorter: fromSorter.SortState;
}

export const reducers: ActionReducerMap<BooksFeatureState> = {
  list: fromList.reducer,
  sorter: fromSorter.reducer
};

// 1. Feature Selector
const selectBooksFeature = createFeatureSelector<BooksFeatureState>(featureName);

// 2. Selector per branch
const selectListBranch = createSelector(selectBooksFeature, b => b.list);
const selectSorterBranch = createSelector(selectBooksFeature, b => b.sorter);

// 3. Helpers
// deconstructor to get entity array
const { selectAll: selectBookEntityArray } = fromList.adapter.getSelectors(selectListBranch);
const selectSortingBy = createSelector(selectSorterBranch, s => s.by);

// 4. For our components
export const selectBookListItemModelUnsorted = createSelector(selectBookEntityArray, books => (books as fromModels.BookListItemModel[]));

export const selectBookListItemModel = createSelector(selectBookListItemModelUnsorted, selectSortingBy,
  (books, sortBy) => [...books.sort((lhs, rhs) => { // sort by the given key
    if (lhs[sortBy].toLowerCase() < rhs[sortBy].toLowerCase()) {  // if the sooner is less than the later, return -1
      return -1;
    } else if (lhs[sortBy].toLowerCase() > rhs[sortBy].toLowerCase()) { // if it's greater than later, return 1
      return 1;
    } else {
      return 0;
    }
  })]
);

export const selectSortingByAuthor = createSelector(selectSortingBy, b => b === 'author');
export const selectSortingByTitle = createSelector(selectSortingBy, b => b === 'title');
