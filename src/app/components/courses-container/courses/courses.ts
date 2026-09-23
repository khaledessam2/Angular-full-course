import { Component, computed, inject, signal } from '@angular/core';
import { CoursesInterface } from '../../../models/Courses.interface';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-Courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

  private CourseService : CoursesService = inject(CoursesService) ;
  private Router : Router = inject(Router) ;
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute) ;

  courses = signal<CoursesInterface[]>(this.CourseService.GetCoureses()) ;

  // Search text from the url (?search=...)
  private QueryParams = toSignal(
    this.ActivatedRoute.queryParamMap,
    { initialValue: this.ActivatedRoute.snapshot.queryParamMap }
  );
  QuerySearch = computed(() => (this.QueryParams().get('search') ?? '').trim().toLowerCase());

  // Filter Functionality
  FilterPrice = signal<string>('all') ;

  // Filter based On name
  searchedCourses = computed(() => {
    const text = this.QuerySearch();
    return text ? this.courses().filter((p) => p.name.toLowerCase().includes(text)) : this.courses();
  });

  // Counters always reflect the search result, not the price filter
  AllCount = computed(() => this.searchedCourses().length);
  FreeCount = computed(() => this.searchedCourses().filter((p) => p.price === 'Free').length);
  PremiumCount = computed(() => this.AllCount() - this.FreeCount());

  // filter based On price
  filterCourses = computed(() => {
    const searched = this.searchedCourses();
    switch (this.FilterPrice()) {
      case 'free':    return searched.filter((p) => p.price === 'Free');
      case 'premium': return searched.filter((p) => p.price !== 'Free');
      default:        return searched;
    }
  });

  GoToDetails(id : number){
    // this.Router.navigateByUrl(`Courses/course/${id}`) ; //Absolute
    // this.Router.navigate(['course' , id] , {relativeTo : this.ActivatedRoute }) ; // relative
    this.Router.navigate(['Courses' , 'course' , id]) ; // Absolute
  }

  GoToCheckout(course : CoursesInterface){
    this.Router.navigate(['Courses' , 'checkout'], { state: { course } });
  }
}
