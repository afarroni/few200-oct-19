import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/loan.actions';
import { GameEntity } from './list.reducer';

export interface LoanState extends EntityState<GameEntity> {
}

export const adapter = createEntityAdapter<GameEntity>();

const initialState: LoanState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.markOnLoan, (state, action) => adapter.addOne(action.game, state)),
  on(actions.removeFromLoan, (state, action) => adapter.removeOne(action.game.id, state))
);

export function reducer(state: LoanState = initialState, action: Action) {
  return reducerFunction(state, action);
}
