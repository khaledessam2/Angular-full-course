import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesInterface } from '../../../models/Courses.interface';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-featured-courses',
  standalone: false,
  templateUrl: './featured-courses.html',
  styleUrl: './featured-courses.css',
})
export class FeaturedCourses {
  private CoursesService: CoursesService = inject(CoursesService);
  private Router: Router = inject(Router);

  protected courses = signal<CoursesInterface[]>(
    this.CoursesService.GetCoureses().slice(0, 4)
  ).asReadonly()

  stars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  GoToDetails(id: number) {
    this.Router.navigate(['Courses', 'course', id]);
  }

  GoToAllCourses() {
    this.Router.navigate(['Courses']);
  }
}
