import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListEntryComponent } from './components/todo-list-entry/todo-list-entry.component';
import { TodoListListComponent } from './components/todo-list-list/todo-list-list.component';
import { ToDoDataService } from './services/todo.data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterByComponent } from './components/counter-by/counter-by.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { BooksModule } from './features/books/books.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoListComponent,
    TodoListEntryComponent,
    TodoListListComponent,
    FooterComponent,
    DashboardComponent,
    CounterComponent,
    CounterByComponent
  ],
  imports: [
    BrowserModule,
    BooksModule, // created outside the app
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [
    ToDoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
