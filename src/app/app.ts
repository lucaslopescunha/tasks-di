import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('tasks-di');
}
