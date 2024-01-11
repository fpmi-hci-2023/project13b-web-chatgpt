import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task, TaskStatus } from '../../models/model'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  public tasks: Task[] = [];
  private subscription: Subscription = new Subscription();

    constructor(
        private _tasksService: TaskService, 
        private _cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.subscription.add(
            this._tasksService.getTasks().subscribe((tasks: Task[]) => {
                this.tasks = tasks;
                this._cdr.detectChanges();
            })
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
