import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TodoListItem, FooterModel } from 'src/app/models';
import { Observable } from 'rxjs';
import { ToDoDataService } from 'src/app/services/todo.data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private service: ToDoDataService) { }
  items$: Observable<FooterModel>;
  ngOnInit(): void {
    this.items$ = this.service.getData().pipe(
      map(data => {
        return {
          totalTodos: data.length,
          completedTodos: data.filter(d => d.complete).length,
          remainingTodos: data.filter((d: { complete: any; }) => !d.complete).length
        } as FooterModel;
      }));
  }
}


