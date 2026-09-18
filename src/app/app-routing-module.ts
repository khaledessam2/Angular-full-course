import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { CoursesContainer } from './components/courses-container/courses-container';
import { NotFound } from './shared/not-found/not-found';
import { CourseDetails } from './components/courses-container/course-details/course-details';
import { Courses } from './components/courses-container/courses/courses';
import { Login } from './shared/login/login';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: Home, title: 'Home page' },
  { path: 'About', component: About, title: 'About page' },
  { path: 'Contact', component: Contact, title: 'Contact page ' },
  { path: 'Courses', component: CoursesContainer, title: 'courses page ', children : [
    { path: '', component: Courses, title: 'courses page ' },
    { path: 'course/:id', component: CourseDetails, title: 'course Details'},
  ]},
  { path : 'login' , component : Login , title: "Login" } ,
  { path: '**', component: NotFound, title: 'Page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
