import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameItemModel } from './models';
import { Store } from '@ngrx/store';
import { GamesFeatureState, selectGameListModel } from './reducers/index';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games$: Observable<GameItemModel[]>;
  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
    this.games$ = this.store.select(selectGameListModel);
  }
}
