import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  entryTitle = 'Add your stuff';
  stuff: TodoListItem[] = [
    { id: 1, description: 'Rake leaves', complete: true },
    { id: 2, description: 'Sweep floor', complete: false }
  ];
  nextId = 3;
  constructor() { }

  ngOnInit() {
  }

  addThingToList(description: string) {
    this.stuff = [{
      id: this.nextId++,
      description,
      complete: false
    },
    ...this.stuff];
  }

}
