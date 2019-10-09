import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadBookData, bookDataLoadedSuccessfully } from '../actions/list.actions';
import { switchMap, map } from 'rxjs/operators';
import { BookEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {

  readonly url = 'http://localhost:3000/books';

  loadBookData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookData), // do stuff when this action happens
      switchMap(() => this.client.get<{ books: BookEntity[] }>(this.url) // get the book array from the client
        .pipe(
          map(response => response.books),
          map(books => bookDataLoadedSuccessfully({ books }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
