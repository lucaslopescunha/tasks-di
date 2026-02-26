import { bootstrapApplication } from '@angular/platform-browser';
import { TasksService } from './app/tasks/task.service';
import { ApplicationModule, InjectionToken } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
/*
export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
bootstrapApplication(App, {
  providers: [{ provide: TasksServiceToken, useClass: TasksService }]
})
  .catch((err) => console.error(err));
*/

platformBrowserDynamic().bootstrapModule(AppModule)