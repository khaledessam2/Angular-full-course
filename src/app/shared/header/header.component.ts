import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector : "app-header" ,
  standalone : false ,
  templateUrl : './header.component.html' ,
  styleUrls : []
})

export class HeaderComponent{
  private router : Router = inject(Router) ;
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute) ;
  NavigateToCourses(){
    // In two navigation methods the Default pass is Absolute Pass ;
    // this.router.navigate(['Courses']) ;
    this.router.navigateByUrl("/Courses") ;
    // if you want to use relative Route use this method
    // this.router.navigate(['Courses'] , {relativeTo: this.ActivatedRoute}) ;
  }
}
