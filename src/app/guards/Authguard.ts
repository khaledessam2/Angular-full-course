import { inject } from "@angular/core";
import { AuthServices } from "../services/Auth.service";
import { Router } from "@angular/router";
import { IDeActivateComponent } from "./Authquard.service";


export const CanActivatefn = () => {
  const authServices : AuthServices = inject(AuthServices) ;
  const router : Router = inject(Router) ;
  if(authServices.isAuthenticated()){
    return true
  }else{
    router.navigate(['login']) ;
    return false;
  }
}


export const CanActivateChildFn = ()=>{
  return CanActivatefn() ;
}


export const CanDeactivation = (component : IDeActivateComponent)=>{
  return component.canExit() ;
}
