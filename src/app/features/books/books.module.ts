import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { SorterComponent } from './components/sorter/sorter.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { AppEffects } from './effects/app.effects';

@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent, SorterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppEffects, ListEffects])
  ],
  exports: [BooksComponent]
})
export class BooksModule {

}
