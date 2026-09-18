import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from '../../services/Auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private AuthServices : AuthServices = inject(AuthServices) ;
  private Router : Router = inject(Router) ;
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute) ;
  loginForm !: FormGroup ;

  ngOnInit(): void {
    this.ActivatedRoute.queryParamMap.subscribe({
      next : (value)=> {
        const logout : boolean = Boolean(value.get("logOut")) ;
        if(logout) this.AuthServices.LogOut() ;
      }
    })

    this.loginForm = new FormGroup({
      userName : new FormControl('' , Validators.required) ,
      password : new FormControl('' , Validators.required) ,
      remember : new FormControl(false) ,
    })
  }

  SubmitLogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched() ;
    } else{
      let {userName , password} = this.loginForm.value
      let user = this.AuthServices.Login(userName , password) ;
      if(this.AuthServices.isAuthenticated()){
        this.Router.navigateByUrl("/Courses") ;
      }else{
        alert("the UserName or Password not Correct ");
      }
      this.loginForm.reset() ;
    }
  }

}
