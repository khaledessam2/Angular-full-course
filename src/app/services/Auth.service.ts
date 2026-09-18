import { inject, Injectable } from "@angular/core";
import { User } from "../models/Users";
import { UserServices } from "./user.service";

@Injectable({
  providedIn : 'root'
})

export class AuthServices{
  private UserServices : UserServices = inject(UserServices);
  isLogged : boolean = false ;

  Login(userName : string , password : string): User | undefined{
    let user = this.UserServices.Users.find((u)=> userName === u.userName && password === u.password );
    user === undefined ? this.isLogged = false : this.isLogged= true ;
    return user ;
  }

  LogOut() : void{
    this.isLogged = false ;
  }

  isAuthenticated(): boolean{
    return this.isLogged ;
  }


}
