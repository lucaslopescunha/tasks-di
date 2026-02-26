import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { TasksService } from './app/tasks/task.service';
import { InjectionToken } from '@angular/core';

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

bootstrapApplication(App, {
  providers: [{ provide: TasksServiceToken, useClass: TasksService }]
})
  .catch((err) => console.error(err));
