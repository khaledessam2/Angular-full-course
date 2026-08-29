import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products-container',
  standalone: false,
  templateUrl: './products-container.html',
  styleUrl: './products-container.css',
})
export class ProductsContainer {
  FilterText : string = '';
  onFilter(event : string){
    this.FilterText = event ;
  }
}
