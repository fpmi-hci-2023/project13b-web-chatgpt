import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from '../models/model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private addEndpoint = '/task/v1/add';
  private listEndpoint = '/task/v1/tasks';

  constructor(private client: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // Setting up headers with Authorization for Basic Auth
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.client.get<Task[]>(this.listEndpoint, { headers: headers });
  }
}
