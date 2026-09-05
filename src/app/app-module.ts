import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';

import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { Footer } from './shared/footer/footer';
import { SetBackground } from './directives/SetBackground.directive';
import { HoverDirective } from './directives/hover.directive';
import { Heighlight } from './directives/heighlight.directive';
import { DisabledProduct } from './directives/disabledProduct.directive';
import { NgClassDirective } from './directives/customNgClass.directive';
import { NgStyleDirective } from './directives/cutomNgStyle.directive';
import { IfDirective } from './directives/if.directive';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NotFound } from './shared/not-found/not-found';
import { CoursesContainer } from './components/courses-container/courses-container';
import { CourseDetails } from './components/courses-container/course-details/course-details';
import { Courses } from './components/courses-container/courses/courses';
import { Filter } from './components/courses-container/courses/filter/filter';
import { Search } from './components/courses-container/search/search';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    Courses,
    Footer,
    Search,
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
    About,
    Contact,
    NotFound,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
