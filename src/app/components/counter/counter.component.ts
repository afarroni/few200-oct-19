import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectResetDisabled } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // gets the state of the counter from the entire app state
    this.count$ = this.store.select(selectCurrentCount);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
  }
  increment() {
    this.store.dispatch(actions.countIncremented());
  }
  decrement() {
    this.store.dispatch(actions.countDecremented());
  }
  reset() {
    // actions. better than {type: 'reset'}
    this.store.dispatch(actions.countReset());
  }

}
