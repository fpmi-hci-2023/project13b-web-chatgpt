import { Component } from '@angular/core';
import { TaskModel } from '../../models/model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  standalone: false,
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss'
})

export class TaskAddComponent {
  public task: TaskModel | null = null;
  public fg: FormGroup;

  constructor(private _tasksService: TaskService, private _router: Router) {
    this.fg = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      coordinator: new FormGroup(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.fg.invalid) {
      return;
    }

    this.task = {
      name: this.fg.controls['name'].value,
      description: this.fg.controls['description'].value,
      coordinators: [this.fg.controls['coordinator'].value]
    }
    this._tasksService.addTask(this.task);
    this._router.navigate(['']);
  }
}
