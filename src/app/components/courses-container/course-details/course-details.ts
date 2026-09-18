import { Component, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CoursesInterface } from '../../../models/Courses.interface';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit , OnDestroy{
  private CourseServices : CoursesService = inject(CoursesService) ;
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute) ;
  ParamMapObservable !: Subscription ;
  courseId : number = 1 ;
  SelectedCourse : CoursesInterface | undefined ;
  quantity = 1;
  suggestCourses : CoursesInterface[] = [] ;

  ngOnInit(): void {
    this.ParamMapObservable = this.ActivatedRoute.params.subscribe({
      next:(value)=> {
          this.courseId = + value["id"];
          this.SelectedCourse = this.CourseServices.GetCoureses().find((course) => course.id === this.courseId ) ;
          this.suggestCourses = this.CourseServices.GetCoureses().filter((course) => course.id !== this.courseId) ;
      },
    })
  }

  ngOnDestroy(): void {
    this.ParamMapObservable.unsubscribe() ;
  }

}
