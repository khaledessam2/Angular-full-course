import { Injectable } from "@angular/core";
import { User } from "../models/Users";

@Injectable({
  providedIn : 'root'
})
export class UserServices{
  Users: User[] = [
    new User(1 , "khaled essam" , 'ke' , "khaled"),
    new User(2 , "shahd mostafa" , 'sh' , "shahd")
  ]

}
