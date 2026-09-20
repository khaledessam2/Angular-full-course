import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';

import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Footer } from './shared/footer/footer';
import { SetBackground } from './directives/SetBackground.directive';
import { HoverDirective } from './directives/hover.directive';
import { Heighlight } from './directives/heighlight.directive';
import { DisabledProduct } from './directives/disabledProduct.directive';
import { NgClassDirective } from './directives/customNgClass.directive';
import { NgStyleDirective } from './directives/cutomNgStyle.directive';
import { IfDirective } from './directives/if.directive';
import { Home } from './components/home/home';
import { Banner } from './components/home/banner/banner';
import { WhyChooseUs } from './components/home/why-choose-us/why-choose-us';
import { FeaturedCourses } from './components/home/featured-courses/featured-courses';
import { Faq } from './components/home/faq/faq';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NotFound } from './shared/not-found/not-found';
import { CoursesContainer } from './components/courses-container/courses-container';
import { CourseDetails } from './components/courses-container/course-details/course-details';
import { Courses } from './components/courses-container/courses/courses';
import { Filter } from './components/courses-container/courses/filter/filter';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './shared/login/login';
import { Checkout } from './components/checkout/checkout';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    Courses,
    Footer,
    Filter,
    CoursesContainer,
    CourseDetails,
    SetBackground,
    HoverDirective,
    Heighlight,
    DisabledProduct,
    NgClassDirective,
    NgStyleDirective,
    IfDirective,
    Home,
    Banner,
    WhyChooseUs,
    FeaturedCourses,
    Faq,
    About,
    Contact,
    NotFound,
    Login,
    Checkout,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  bootstrap: [App],
})
export class AppModule {}
