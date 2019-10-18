import { Component } from '@angular/core';
import { AppState, selectErrorExists, selectErrorMessage } from './reducers';
import { Store } from '@ngrx/store';
import { applicationStarted } from './actions/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FEW200';

  constructor(private store: Store<AppState>) {
    store.dispatch(applicationStarted());

  }

  makeItBig() {
    this.title = this.title.toUpperCase();
  }
}
