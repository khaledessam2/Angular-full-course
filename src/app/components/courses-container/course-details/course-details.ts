import { Component, computed, inject, signal } from '@angular/core';
import { CoursesInterface } from '../../../models/Courses.interface';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  private CourseServices : CoursesService = inject(CoursesService) ;
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute) ;

  private courses = signal<CoursesInterface[]>(this.CourseServices.GetCoureses()) ;

  // toSignal unsubscribes automatically when the component is destroyed
  private params = toSignal(
    this.ActivatedRoute.paramMap,
    { initialValue: this.ActivatedRoute.snapshot.paramMap }
  );
  courseId = computed(() => +(this.params().get('id') ?? 1));

  SelectedCourse = computed<CoursesInterface | undefined>(() =>
    this.courses().find((course) => course.id === this.courseId())
  );
  suggestCourses = computed(() =>
    this.courses().filter((course) => course.id !== this.courseId())
  );

  quantity = signal<number>(1);
}
