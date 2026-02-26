import { Component, ElementRef, Inject, inject, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../task.service';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
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
