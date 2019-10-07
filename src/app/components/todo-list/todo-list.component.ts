import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';
import { Observable } from 'rxjs';
import { ToDoDataService } from '../../services/todo.data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  entryTitle = 'Add your stuff';
  stuff$: Observable<TodoListItem[]>;
  nextId = 3;
  constructor(private service: ToDoDataService) { }

  ngOnInit() {
    this.stuff$ = this.service.getData();
  }

  addThingToList(description: string) {
    this.service.addItem(description);
  }

  markComplete(item: TodoListItem) {
    this.service.markComplete(item);
  }
}
