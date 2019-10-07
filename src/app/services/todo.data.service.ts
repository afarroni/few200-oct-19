import { TodoListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

export class ToDoDataService {
  private data: TodoListItem[] = [
    { id: 1, description: 'Clean Attic', complete: false },
    { id: 2, description: 'Vacuum', complete: false }
  ];
  currentId = 3;
  private subject = new BehaviorSubject<TodoListItem[]>(this.data);

  getData(): Observable<TodoListItem[]> {
    return this.subject.asObservable();
  }
  addItem(description: string) {
    // do the api call, wait until the thing comes back with right id, etc.
    const itemToAdd = { id: this.currentId++, description, complete: false };
    this.data = [itemToAdd, ...this.data];
    // pushing updated data to the subject and all subscribed
    this.subject.next(this.data);
  }

  markComplete(item: TodoListItem) {
    // do anything else that needs to happen
    const stored = this.data.find(d => d.id === item.id);
    stored.complete = true;
    this.subject.next(this.data);
  }
}
