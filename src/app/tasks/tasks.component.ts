import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksService } from './task.service';
//import { TasksService } from './task.service';

@Component({
  selector: 'app-tasks',
  imports: [NewTaskComponent, TasksListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [TasksService]
})
export class TasksComponent {

}
