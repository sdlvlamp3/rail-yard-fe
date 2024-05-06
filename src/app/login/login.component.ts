import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading=false

  loginForm: FormGroup=new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    });

  isError:boolean=false;

 constructor(private authService: AuthService, private router: Router){}

 login(){
   if(this.loginForm.valid){
     const username = this.loginForm.value.username;
     const password = this.loginForm.value.password;
     this.isLoading = true

      this.authService.login(username, password).subscribe({

          next: (res: any) => {
            console.log('logged in with token', res.token);
            this.authService.setToken(res.token);
            this.router.navigate(['home-page'])
          },
          error: (error:any) =>{
          console.log("Error when logging in", error)
          this.isError=true
          this.isLoading=false
        }
      })
   }
 };

close(){
  this.router.navigate(['/']);
};

}
