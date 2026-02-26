import { bootstrapApplication } from '@angular/platform-browser';
import { TasksService } from './app/tasks/task.service';
import { InjectionToken } from '@angular/core';
import { AppComponent } from './app/app';

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksServiceToken, useClass: TasksService }]
})
  .catch((err) => console.error(err));


//platformBrowserDynamic().bootstrapModule(AppModule)