import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  public fG: FormGroup;

  constructor(private _fb: FormBuilder, private authService: AuthService) {
    this.fG = this._fb.group({
      email: [''],
      username: [''],
      password: [''],
    });
  }

  get email() {
    return this.fG.get('email')?.value;
  }

  get username() {
    return this.fG.get('username')?.value;
  }
 
  get password() {
    return this.fG.get('password')?.value;
  }
 
  onSubmit(){
    this.authService.signup(this.email, this.username, this.password)
      .subscribe({
        next: (response) => {
          // Handle successful login response here
          console.log('Signup successful', response);
        },
        error: (error) => {
          // Handle login error here
          console.error('Signup failed', error);
        }
      });
  }
}
