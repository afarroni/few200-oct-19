import { GameItemModel } from '../../models';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GamesFeatureState } from '../../reducers';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/loan.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: GameItemModel[] = [];
  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
  }

  markOnLoan(title: string) {
    this.store.dispatch(actions.markOnLoan({ game: this.model.find(x => x.title === title) }));
  }

  removeFromLoan(title: string) {
    this.store.dispatch(actions.removeFromLoan({ game: this.model.find(x => x.title === title) }));
  }
}
