import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  // input from parent
  @Input() items: TodoListItem[] = [];
  @Output() markedComplete = new EventEmitter<TodoListItem>();
  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {
    // send it up to dad
    this.markedComplete.emit(item);
  }
}
