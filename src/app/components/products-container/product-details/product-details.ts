import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsInterface } from '../../../models/products.interface';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnChanges {
  quantity = 1;
  @Input()product !: ProductsInterface ;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.product) ;
  }
}
