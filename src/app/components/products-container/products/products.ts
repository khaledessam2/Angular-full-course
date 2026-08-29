import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsInterface } from '../../../models/products.interface';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  products : ProductsInterface[] = [
    {
      id: 1,
      name: 'Angular',
      image: 'images/69246faffcaf91a83d1ad8b1_Cycle Icon - Blog (70).png',
      price: 6500,
      rating: 4.9,
      reviews: 320,
      category: 'Frontend',
      stock: true,
      is_in_inventory : true ,
      description:
        'Angular is a powerful TypeScript-based framework for building fast, scalable, and dynamic single-page web applications.',
      longDescription:
        'Learn Angular from beginner to advanced level with real-world projects.'
    },
    {
      id: 2,
      name: 'JavaScript',
      image: 'images/What-Is-JavaScript-Used-For.avif',
      price: 5000,
      rating: 4.8,
      reviews: 270,
      category: 'Programming',
      stock: false,
      is_in_inventory : true ,
      description:
        'JavaScript is a versatile programming language used to create interactive and dynamic web applications.',
      longDescription:
        'Master modern JavaScript including ES6+, DOM, Fetch API, Promises, Async/Await, and more.'
    },
    {
      id: 3,
      name: 'TypeScript',
      image: 'images/images.jpg',
      price: 'Free',
      rating: 5,
      reviews: 180,
      category: 'Programming',
      stock: true,
      is_in_inventory : true ,
      description:
        'TypeScript is a strongly typed programming language built on JavaScript.',
      longDescription:
        'Learn interfaces, generics, enums, decorators, modules, and TypeScript best practices.'
    },
    {
      id: 4,
      name: 'CSS Course',
      image: 'images/images (1).jpg',
      price: 1500,
      rating: 4.6,
      reviews: 140,
      category: 'Frontend',
      stock: false,
      is_in_inventory : false ,
      description:
        'CSS is used to style and design modern web pages.',
      longDescription:
        'Master Flexbox, Grid, animations, transitions, responsive design, and modern CSS techniques.'
    },
    {
      id: 5,
      name: 'Bootstrap',
      image: 'images/bootstrap-alternatives.jpg',
      price: 1300,
      rating: 4.7,
      reviews: 210,
      category: 'Frontend',
      stock: true,
      is_in_inventory : true ,
      description:
        'Bootstrap is a popular framework for building responsive websites.',
      longDescription:
        'Learn Bootstrap 5 grid system, utilities, components, forms, modals, cards, and responsive layouts.'
    }
  ];

  SelectedProduct ?: ProductsInterface ;

  // Filter Functionality
  filterProducts: ProductsInterface[] = [...this.products];
  @Input() FilterTextInput: string = '';
  FilterPrice: string = 'all';

  // Counters shown on the filter buttons
  AllCount: number = this.products.length;
  FreeCount: number = 0;
  PremiumCount: number = 0;

  OnFilterChanged(value: string) {
    this.FilterPrice = value;
    this.ApplyFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ApplyFilter();
  }

  ApplyFilter() {
    // Filter based On name
    const text = this.FilterTextInput.trim().toLowerCase();
    const searchedProducts = text ? this.products.filter((p) => p.name.toLowerCase().includes(text)) : [...this.products];

    // Counters always reflect the search result, not the price filter
    this.AllCount = searchedProducts.length;
    this.FreeCount = searchedProducts.filter((p) => p.price === 'Free').length;
    this.PremiumCount = this.AllCount - this.FreeCount;

    // filter based On price
    if (this.FilterPrice === 'free') {
      this.filterProducts = searchedProducts.filter((p) => p.price === 'Free');
    } else if (this.FilterPrice === 'premium') {
      this.filterProducts = searchedProducts.filter((p) => p.price !== 'Free');
    } else {
      this.filterProducts = searchedProducts;
    }

    // Hide the details card if the selected product is filtered out
    if (this.SelectedProduct && !this.filterProducts.includes(this.SelectedProduct)) {
      this.SelectedProduct = undefined;
    }
  }

  // When Click on product display details
  OnSelectedProtect(product : ProductsInterface){
    this.SelectedProduct = product ;
  }
}
