import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user : User | null = null

  private loginEndpoint = 'https://auth.hci.richardhere.dev/api/v1/login';
  private signupEndpoint = 'https://auth.hci.richardhere.dev/api/v1/reg';

  constructor(private client: HttpClient) { }

  login(username: string, password: string) {
    // Creating Basic Auth header
    const basicAuthHeader = 'Basic ' + btoa(`${username}:${password}`);

    // Setting up headers with Authorization for Basic Auth
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'richardhere.dev',
      Authorization: basicAuthHeader,
    });

    // Making the POST request to the login endpoint with the Basic Auth header
    return this.client.post<any>(this.loginEndpoint, {}, { headers: headers })
    .subscribe({
      next: (response) => {
        this.user = response;
        console.log('Login successful', response);
      },
      error: (error) => {
        this.user = null;
        console.error('Login failed', error);
      }
    });
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

    return this.client.post<User>(this.signupEndpoint, body, { headers: headers })
      .subscribe({
        next: (response) => {
          this.user = response;
          console.log('Signup successful', response);
        },
        error: (error) => {
          this.user = null;
          console.error('Signup failed', error);
        }
    });
  }
}
