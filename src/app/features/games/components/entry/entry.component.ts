import { Component, OnInit } from '@angular/core';
import { addGame } from '../../actions/list.actions';
import { GamesFeatureState } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {


  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {

  }

  add(titleEl: HTMLInputElement, pubEl: HTMLInputElement, platEl: HTMLButtonElement) {
    const title = titleEl.value;
    const publisher = pubEl.value;
    const platform = platEl.value;
    this.store.dispatch(addGame({ title, publisher, platform }));

    titleEl.value = '';
    pubEl.value = '';
    platEl.value = 'Platform';
    titleEl.focus();
  }
  changeButton(name: string, platEl: HTMLButtonElement) {
    platEl.value = name;
  }
}
