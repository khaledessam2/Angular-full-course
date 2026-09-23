import { Component, effect, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private ActivatedRoute : ActivatedRoute = inject(ActivatedRoute) ;
  ngOnInit(): void {
    // fragment is return an Observable ;
    // this.ActivatedRoute.fragment.subscribe({
    //   next:(value : string | null)=> {
    //     this.jumpToSection(value) ;
    //   },
    // })
  }

  fragment = toSignal(this.ActivatedRoute.fragment, {
    initialValue: null
  });

  constructor() {
    effect(() => {
      this.jumpToSection(this.fragment());
    });
  }

  jumpToSection(section : string | null){
    if(!section) return ;
    document.getElementById(section)?.scrollIntoView({
      behavior : "smooth"
    })
  }
}
