import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectErrorExists, selectErrorMessage, AppState } from 'src/app/reducers';
import * as actions from '../../actions/app.actions';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorExists$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.errorExists$ = this.store.select(selectErrorExists);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  closeError() {
    this.store.dispatch(actions.clearApplicationFeatureError());
  }

}
