import { Injectable, signal } from "@angular/core";
import { CoursesInterface } from "../models/Courses.interface";

@Injectable({
    providedIn :'root'
})

export class CoursesService{
    private courses = signal<CoursesInterface[]>(    [
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
    ]).asReadonly()


    GetCoureses() : CoursesInterface[] {
      return this.courses();
    }


}
