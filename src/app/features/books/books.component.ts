import { Component, OnInit } from '@angular/core';
import { BooksFeatureState, selectBookListItemModel } from './reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookListItemModel } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItemModel[]>;
  constructor(private store: Store<BooksFeatureState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookListItemModel);
  }

}
