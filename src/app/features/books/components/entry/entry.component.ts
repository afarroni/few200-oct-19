import { Component, OnInit } from '@angular/core';
import { bookAdded } from '../../actions/list.actions';
import { BooksFeatureState } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksFeatureState>) { }

  ngOnInit() {
  }

  add(titleEl: HTMLInputElement, authorEl: HTMLInputElement) {
    const title = titleEl.value;
    const author = authorEl.value;

    // dispatch an action - add to state and assume works now
    this.store.dispatch(bookAdded({ title, author }));

    titleEl.value = '';
    authorEl.value = '';
    titleEl.focus();
  }

}
