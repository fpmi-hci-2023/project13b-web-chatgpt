import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskAddComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TaskModule { }
