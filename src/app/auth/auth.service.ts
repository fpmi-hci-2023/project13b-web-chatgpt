import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginEndpoint = '/api/v1/login';
  private signupEndpoint = '/api/v1/reg';

  constructor(private client: HttpClient) { }

  login(username: string, password: string) {
    // Creating Basic Auth header
    const basicAuthHeader = 'Basic ' + btoa(`${username}:${password}`);

    // Setting up headers with Authorization for Basic Auth
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: basicAuthHeader,
    });

    // Making the POST request to the login endpoint with the Basic Auth header
    return this.client.post<any>(this.loginEndpoint, {}, { headers: headers });
  }

  signup(email: string, username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      "email": email,
      "password": password,
      "username": username
    }

    return this.client.post<any>(this.signupEndpoint, body, { headers: headers });
  }
}
