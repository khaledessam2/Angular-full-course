import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Courses-container',
  standalone: false,
  templateUrl: './courses-container.html',
  styleUrl: './courses-container.css',
})
export class CoursesContainer {
  FilterText : string = '';
  onFilter(event : string){
    this.FilterText = event ;
  }
}
