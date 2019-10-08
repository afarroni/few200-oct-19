import { Action, createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[app] count incremented'
);

export const countDecremented = createAction(
  '[app] count decremented'
);

export const countReset = createAction(
  '[app] count reset'
);

export const countBySet = createAction(
  '[app] count set by',
  props<{ by: number }>()
);
