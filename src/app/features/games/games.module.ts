import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { GamesComponent } from './games.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';


@NgModule({
  declarations: [ListComponent, EntryComponent, GamesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [GamesComponent]
})
export class GamesModule { }
