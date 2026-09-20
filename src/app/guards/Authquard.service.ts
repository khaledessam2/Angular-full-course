import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthServices } from "../services/Auth.service";
import { Contact } from "../components/contact/contact";
import { Observable } from "rxjs";

export interface IDeActivateComponent{
  canExit : ()=> boolean | Observable<boolean> | Promise<boolean>
}

@Injectable({
  providedIn :'root'
})

export class AuthGuardServices implements CanActivate , CanActivateChild , CanDeactivate<IDeActivateComponent>{
  private AuthServices : AuthServices = inject(AuthServices) ;
  private router : Router = inject(Router) ;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.AuthServices.isAuthenticated()){
      return true
    }else{
      this.router.navigate(['login']) ;
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute , state) ;
  }

  canDeactivate(component: IDeActivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return component.canExit() ;
  }

}
