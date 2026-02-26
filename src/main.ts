import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { TasksService } from './app/tasks/task.service';

bootstrapApplication(App, {
  providers: [TasksService] /**Outra maneira de fazer Dependency Injection */
}).catch((err) => console.error(err));
