import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirmation: new FormControl('', Validators.required),
    });
   }

  signup() {
    let newUser: User = this.signupForm.value;
    newUser.user_type = 'user';
    this.authService.signup(newUser).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
