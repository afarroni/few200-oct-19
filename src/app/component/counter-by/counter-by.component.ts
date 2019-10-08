import { Component, OnInit } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-by',
  templateUrl: './counter-by.component.html',
  styleUrls: ['./counter-by.component.css']
})
export class CounterByComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  setCountBy(by: number) {
    this.store.dispatch(countBySet({ by }));
  }
}
