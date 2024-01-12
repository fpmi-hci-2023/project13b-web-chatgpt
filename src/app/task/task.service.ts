import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Task, TaskStatus, TaskModel } from '../models/model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private addEndpoint = 'https://task.hci.richardhere.dev/task/v1/add';
  private listEndpoint = 'https://task.hci.richardhere.dev/task/v1/tasks';
  private approveEndpoint = 'https://task.hci.richardhere.dev/task/v1/approve/:email/:id'
  private declineEndpoint = "https://task.hci.richardhere.dev/task/v1/decline/:email/:id"
  private deleteEndpoint = "https://task.hci.richardhere.dev/task/v1/delete/:id"

  constructor(private client: HttpClient, private authService: AuthService) { }

  getTasks(): Observable<Task[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.client.get<Task[]>(this.listEndpoint, { headers: headers });
  }

  getTaskById(taskId: number): Observable<Task> {
    return this.getTasks().pipe(map(taskList => taskList.filter(task => task.id === taskId)[0]));
  }

  addTask(taskModel: TaskModel) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { taskModel }
    
    return this.client.post<any>(this.addEndpoint, body, { headers: headers });
  }

  approveTask(taskId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    let email = this.authService.user?.email
    return this.client.post<any>(this.approveEndpoint + email + '/' + taskId, {}, { headers: headers });
  }

  deleteTask(taskId: number) {    
    return this.client.delete<any>(this.deleteEndpoint + taskId);
  }
}
