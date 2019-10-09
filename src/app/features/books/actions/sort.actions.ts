import { createAction } from '@ngrx/store';


export const sortedByAuthor = createAction(
  '[books] sorted by author'
);

export const sortedByTitle = createAction(
  '[books] sorted by title'
);
