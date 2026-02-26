import { Component, ElementRef, inject, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService = inject(TasksService);
  close = output<void>();

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
