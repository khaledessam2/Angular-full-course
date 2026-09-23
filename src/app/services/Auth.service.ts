import { inject, Injectable, signal } from "@angular/core";
import { User } from "../models/Users";
import { UserServices } from "./user.service";

@Injectable({
  providedIn : 'root'
})

export class AuthServices{
  private UserServices : UserServices = inject(UserServices);
  isLogged = signal<boolean>(false) ;

  Login(userName : string , password : string): User | undefined{
    let user = this.UserServices.Users().find((u)=> userName === u.userName && password === u.password );
    user === undefined ? this.isLogged.set(false) : this.isLogged.set(true) ;
    return user ;
  }

  LogOut() : void{
    this.isLogged.set(false);
  }

  isAuthenticated(): boolean{
    return this.isLogged() ;
  }


}
