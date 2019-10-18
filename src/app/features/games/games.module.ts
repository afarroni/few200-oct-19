import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { GamesComponent } from './games.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { FormsModule } from '@angular/forms';
import { OnLoanComponent } from './components/on-loan/on-loan.component';


@NgModule({
  declarations: [ListComponent, EntryComponent, GamesComponent, OnLoanComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [GamesComponent]
})
export class GamesModule { }
