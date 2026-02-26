import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";


@Injectable({ providedIn: 'root' })//root means the service can be injected anywhere in an angular application.
export class TasksService {
    tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();
    addTask(taskData: {title: string; description: string}) {
        
        const newTask: Task = {
            ...taskData,
            id: new Date().getTime()+'',
            status: 'OPEN'
        }

        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    }

    updateTasksStatus(taskId: string, newStatus: TaskStatus) {
        console.log('task id'+ taskId);
        this.tasks.update((oldTasks) => 
            oldTasks.map((task)=> 
                task.id === taskId ? {...task, status: newStatus} : task
            )
        );
    }
}