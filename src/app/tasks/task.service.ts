import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";


//@Injectable({ providedIn: 'root' })//root means the service can be injected anywhere in an angular application.
export class TasksService {
    tasks : Task[] = [];
    loggingService = inject(LoggingService);

    get allTasks()  {
        return [...this.tasks];
    }
    addTask(taskData: {title: string; description: string}) {
        
        const newTask: Task = {
            ...taskData,
            id: new Date().toLocaleTimeString()+'',
            status: 'OPEN'
        }

        this.tasks = [...this.tasks, newTask];
        this.loggingService.log(`ADDED TASK WITH TITLE ${taskData.title}`);
    }

    updateTasksStatus(taskId: string, newStatus: TaskStatus) {
        console.log('task id'+ taskId);
        this.tasks = this.tasks.map((task) =>
            task.id === taskId ? {...task, status: newStatus}: task);
        this.loggingService.log(`CHANGE TASK STATUS TO ${newStatus}`);
    }
}