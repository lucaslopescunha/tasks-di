import { Component, computed, inject, input } from '@angular/core';
import { Task, TASK_STATUS_OPTIONS, TaskStatus } from '../../task.model';
import { TasksServiceToken } from '../../../../main';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  imports: [FormsModule]
})
export class TaskItemComponent {
  private service = inject(TasksServiceToken);
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  task = input.required<Task>();
  taskStatus = computed(() => {

    switch(this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on It';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';
    switch(status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.service.updateTasksStatus(taskId, newStatus);
  }
}
