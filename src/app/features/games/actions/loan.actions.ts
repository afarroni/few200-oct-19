import { createAction, props } from '@ngrx/store';
import { GameItemModel } from '../models';


export const markOnLoan = createAction(
  '[games] marking game on loan',
  props<{ game: GameItemModel }>()
);

export const removeFromLoan = createAction(
  '[games] removing game from loan',
  props<{ game: GameItemModel }>()
);
