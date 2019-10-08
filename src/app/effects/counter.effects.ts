import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  writeCountByToLs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  // is there an action ofType applicationStarted? - see if by value is in local storage
  // if so, turn it into an action to create a new state
  // otherwise continue
  readCountByFromLs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(val => val !== null),
      map(val => parseInt(val, 10)),
      map(by => counterActions.countBySet({ by }))
    )
  );

  constructor(private actions$: Actions) { }
}
