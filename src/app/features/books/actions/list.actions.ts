import { BookListItemModel } from '../models';
import { BookEntity } from '../reducers/list.reducer';
import { createAction } from '@ngrx/store';

let currentId = 99;

export const bookAdded = createAction(
  '[books] book added',
  ({ title, author }: { title: string, author: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      author
    } as BookEntity
  })
);
