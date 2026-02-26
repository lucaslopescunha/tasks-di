import { Component, ElementRef, Inject, inject, output, viewChild } from '@angular/core';
import { TasksService } from '../task.service';
import { TasksServiceToken } from '../../app.module';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false
})
export class NewTaskComponent {
  
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // private tasksService = inject(TasksServiceToken);
  close = output<void>();
//    private tasksService = inject(TasksServiceToken);

  /**
   * How to use injection token constructor
   * 
   * @param tasksService 
   */
  constructor(@Inject(TasksServiceToken) private tasksService: TasksService) {

  }

  onAddTask(title: string, description: string) {
    this.tasksService.addTask( {
      description: description,
      title: title
    });
    this.formEl()?.nativeElement.reset();
  }

  onCancel() {
    this.close.emit();
  }
}
