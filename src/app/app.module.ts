import { InjectionToken, NgModule } from "@angular/core";
import { TasksService } from "./tasks/task.service";
import { AppComponent } from "./app";
import { TasksComponent } from "./tasks/tasks.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskItemComponent } from "./tasks/tasks-list/task-item/task-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

export const TasksServiceToken = new InjectionToken<TasksService>(
    'tasks-service-token'
);

@NgModule( {
    declarations: [
        AppComponent,
        TasksComponent,
        TasksListComponent,
        TaskItemComponent,
        NewTaskComponent,
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
    providers: [{ provide: TasksServiceToken, useClass: TasksService}]
})
export class AppModule {}