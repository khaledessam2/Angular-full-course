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
import { Checkout } from './components/checkout/checkout';
import { AuthGuardServices } from './guards/Authquard.service';
import { CanActivateChildFn, CanActivatefn, CanDeactivation } from './guards/Authguard';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: Home, title: 'Home page' },
  { path: 'About', component: About, title: 'About page' },
  { path: 'Contact', component: Contact, title: 'Contact page' , canDeactivate:[CanDeactivation] },
  { path: 'Courses', component: Courses, title: 'courses page' },
  { path: 'Courses', canActivateChild: [CanActivateChildFn] , children : [
    { path: 'course/:id', component: CourseDetails, title: 'course Details'},
    { path: 'checkout', component: Checkout , title:'Checkout Page' }
  ]},
  { path : 'login' , component : Login , title: "Login" } ,
  { path: '**', component: NotFound, title: 'Page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
