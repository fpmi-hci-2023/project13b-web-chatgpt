import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../../models/model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  standalone: false,
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  
  public task: Task | null = null;
  private taskId: number;
  private _subscription: Subscription = new Subscription();

  constructor(
      private _route: ActivatedRoute, 
      private _tasksService: TaskService, 
      private _cdr: ChangeDetectorRef) 
      {
      this.taskId = _route.snapshot.params['taskId'];
  }

  ngOnInit(): void {
      this._subscription.add(
          this._tasksService.getTaskById(this.taskId).subscribe((_task: Task) => {
              this.task = _task;
              this._cdr.detectChanges();
          })
      );
  }

  ngOnDestroy(): void {
      this._subscription.unsubscribe();
  }

}
