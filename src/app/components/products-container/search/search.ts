import { Component, ElementRef, EventEmitter, Output, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  @Output() FilterText : EventEmitter<string> = new EventEmitter<string>() ;
  @ViewChild('input' , {static: true}) SearchInputElement !: ElementRef ;
  Search(){
    this.FilterText.emit(this.SearchInputElement.nativeElement.value) ;
  }
}
