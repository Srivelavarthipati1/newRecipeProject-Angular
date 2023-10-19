import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error:string = null;
constructor(private authService: AuthService, private router: Router){}

  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode
  }

  onSubmit(form:NgForm){

    if(!form.valid) return;

    const email= form.value.email;
    const password= form.value.password;
   
    this.isLoading=true;

    if(this.isLoginMode){
      this.authService.login(email, password).subscribe({
        next: (resData) => {
          console.log(resData);
          this.isLoading=false;
          this.router.navigate(['/recipes'])
        },
        error: (errorRes) => {
          console.log(errorRes);
          this.error = 'Invalid Credentials try again!!';
          this.isLoading = false;
        }
      });
      
    }
    else{
      this.authService.signup(email, password).subscribe({
        next: (resData) => {
          console.log(resData);
          this.isLoading=false;
          this.router.navigate(['/auth'])
          this.isLoginMode= true;
        },
        error: (errorRes) => {
          console.log(errorRes);
          this.error = 'Invalid Credentials try again!!';
          this.isLoading = false;
        }
      });
      
    
    }
    
    form.reset();
  }
  
}
