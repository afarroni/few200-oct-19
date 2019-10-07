import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css']
})
export class TodoListEntryComponent implements OnInit {

  @Output() addedItem = new EventEmitter<string>();
  @Input() title = 'Your things to do';
  constructor() { }

  ngOnInit() {
  }

  addItem(item) {
    this.addedItem.emit(item.value);

    item.value = ''; // clear out variable
    item.focus(); // put the cursor there
  }
}
