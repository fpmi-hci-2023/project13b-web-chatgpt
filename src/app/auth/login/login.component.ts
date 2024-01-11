import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public fG: FormGroup;

  constructor(private _fb: FormBuilder, private authService: AuthService) {
    this.fG = this._fb.group({
      username: [''],
      password: [''],
    });
  }

  get username() {
    return this.fG.get('username')?.value;
  }
 
  get password() {
    return this.fG.get('password')?.value;
  }
 
  onSubmit(){
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (response) => {
          // Handle successful login response here
          console.log('Login successful', response);
        },
        error: (error) => {
          // Handle login error here
          console.error('Login failed', error);
        }
  });
  }
}
