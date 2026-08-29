import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { Footer } from './shared/footer/footer';
import { ProductsContainer } from './components/products-container/products-container';
import { Products } from './components/products-container/products/products';
import { Search } from './components/products-container/search/search';
import { Filter } from './components/products-container/products/filter/filter';
import { ProductDetails } from './components/products-container/product-details/product-details';
import { SetBackground } from './directives/SetBackground.directive';

import { HoverDirective } from './directives/hover.directive';
import { Heighlight } from './directives/heighlight.directive';
import { DisabledProduct } from './directives/disabledProduct.directive';
import { NgClassDirective } from './directives/customNgClass.directive';
import { NgStyleDirective } from './directives/cutomNgStyle.directive';
import { IfDirective } from './directives/if.directive';
import { Courses } from './components/courses/courses';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    Products,
    Footer,
    Search,
    Filter,
    ProductsContainer,
    ProductDetails,
    SetBackground,
    HoverDirective,
    Heighlight,
    DisabledProduct,
    NgClassDirective,
    NgStyleDirective,
    IfDirective,
    Courses,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
