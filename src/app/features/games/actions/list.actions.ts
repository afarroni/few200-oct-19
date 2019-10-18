import { createAction, props } from '@ngrx/store';
import { GameEntity } from '../reducers/list.reducer';

let currentId = 3;

export const addGame = createAction(
  '[games] adding a game',
  ({ title, publisher, platform }: { title: string, publisher: string, platform: string }) => ({
    entity: {
      id: 'T' + currentId++,
      title,
      publisher,
      platform
    } as GameEntity
  })
);



