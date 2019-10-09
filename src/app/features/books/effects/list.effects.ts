import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadBookData, bookDataLoadedSuccessfully, bookAddedSuccessfully, bookAdded, bookAddedFailure } from '../actions/list.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BookEntity } from '../reducers/list.reducer';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {

  readonly url = 'http://localhost:3000/books';

  // effect when books are added
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookAdded),
      map(a => a.entity),
      switchMap((originalBook) => this.client.post<BookEntity>(this.url, { title: originalBook.title, author: originalBook.author })
        .pipe(
          map(result => bookAddedSuccessfully({ oldId: originalBook.id, book: result })),
          catchError(err => { // we said it worked, but it didn't so gracefully error
            return of(bookAddedFailure({ book: originalBook, message: err.error.message }));
          })
        )
      )
    ), { dispatch: true });

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
