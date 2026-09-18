import { Component, inject, OnInit } from '@angular/core';
import { CoursesInterface } from '../../../models/Courses.interface';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {

  private CourseService : CoursesService = inject(CoursesService) ;
  private Router : Router = inject(Router) ;
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute)
  courses : CoursesInterface[] = [] ;
  QuerySearch : string | null = null ;

  // Filter Functionality
  filterCourses: CoursesInterface[] = [...this.courses];
  FilterPrice: string = 'all';

  // Counters shown on the filter buttons
  AllCount: number = this.courses.length;
  FreeCount: number = 0;
  PremiumCount: number = 0;

  constructor(){
    this.courses = this.CourseService.GetCoureses() ;
  }

  ngOnInit(): void {
    this.ActivatedRoute.queryParamMap.subscribe({
      next:(value)=>{
        this.QuerySearch = value.get('search') ;
        this.ApplyFilter();
      }
    })
  }


  OnFilterChanged(value: string) {
    this.FilterPrice = value;
    this.ApplyFilter();
  }

  ApplyFilter() {
    // Filter based On name
    const text = (this.QuerySearch ?? '').trim().toLowerCase();
    const searchedProducts = text ? this.courses.filter((p) => p.name.toLowerCase().includes(text)) : [...this.courses];

    // Counters always reflect the search result, not the price filter
    this.AllCount = searchedProducts.length;
    this.FreeCount = searchedProducts.filter((p) => p.price === 'Free').length;
    this.PremiumCount = this.AllCount - this.FreeCount;

    // filter based On price
    if (this.FilterPrice === 'free') {
      this.filterCourses = searchedProducts.filter((p) => p.price === 'Free');
    } else if (this.FilterPrice === 'premium') {
      this.filterCourses = searchedProducts.filter((p) => p.price !== 'Free');
    } else {
      this.filterCourses = searchedProducts;
    }

  }

  GoToDetails(id : number){
    // this.Router.navigateByUrl(`Courses/course/${id}`) ; //Absolute
    // this.Router.navigate(['course' , id] , {relativeTo : this.ActivatedRoute }) ; // relative
    this.Router.navigate(['Courses' , 'course' , id]) ; // Absolute
  }
}
