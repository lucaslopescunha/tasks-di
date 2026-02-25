import { Injectable, signal } from "@angular/core";
import { NewTask, Task } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
    resultsData = signal<Task[]>([]);

    addTask(taskData: NewTask) {
        
        let tasks : Task[] | undefined= this.resultsData();

        tasks?.push( {
            id: new Date().getTime()+'',
            description: taskData.description,
            status: 'OPEN',
            title: taskData.title
        });
        console.log(tasks);
        this.resultsData.set(tasks);
    }


}