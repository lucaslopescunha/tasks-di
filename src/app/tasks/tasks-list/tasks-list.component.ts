import { Component, Inject, inject, signal } from '@angular/core';

import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  providers: [taskStatusOptionsProvider],
  imports: [TaskItemComponent]
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  private tasksService = inject(TasksServiceToken);
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  results = () => {
    switch(this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService
            .allTasks();
    }
  }
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
