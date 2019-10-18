import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';

export interface GameEntity {
  id: string;
  title: string;
  publisher: string;
  platform: string;
}

export const adapter = createEntityAdapter<GameEntity>();

const initialState: GameState = adapter.getInitialState({
  ids: ['0', '1'],
  entities: [{
    id: 0,
    title: 'Box Boy+Box Girl',
    publisher: 'Nintendo',
    platform: 'Switch'
  },
  {
    id: 1,
    title: 'Captain Toad Treasure Tracker',
    publisher: 'Nintendo',
    platform: 'Switch'
  }]
});

export interface GameState extends EntityState<GameEntity> {

}

const reducerFunction = createReducer(
  initialState,
  on(actions.addGame, (state, action) => adapter.addOne(action.entity, state))
);

export function reducer(state: GameState = initialState, action: Action) {
  return reducerFunction(state, action);
}
