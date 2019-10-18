import { GameItemModel } from '../../models';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesFeatureState } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-on-loan',
  templateUrl: './on-loan.component.html',
  styleUrls: ['./on-loan.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnLoanComponent implements OnInit {

  @Input() model: GameItemModel[] = [];
  show = false;
  buttonName = 'Show loaned games';
  constructor(private store: Store<GamesFeatureState>) { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show loaned games';
    }
  }

}
