import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Sara Ahmed',
      role: 'Frontend Developer',
      quote: 'The Angular course took me from knowing barely any JavaScript to shipping my first production app in a few months.',
      rating: 5,
    },
    {
      name: 'Omar Khalil',
      role: 'Computer Science Student',
      quote: 'Clear explanations and hands-on projects. I finally understood TypeScript after struggling with it for a year.',
      rating: 5,
    },
    {
      name: 'Mona Tarek',
      role: 'Junior Web Developer',
      quote: 'Great value for the price. The instructors explain things step by step and the projects are genuinely useful.',
      rating: 4,
    },
  ];

  stars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
