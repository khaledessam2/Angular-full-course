import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Output()SelectedRadioButton : EventEmitter<string> = new EventEmitter<string>() ;
  @Input() All : number = 0 ;
  @Input() Free : number = 0 ;
  @Input() premium : number = 0 ;

  ChangeSelectedRadioButton(event : Event){
    this.SelectedRadioButton.emit((event.target as HTMLInputElement).value)
  }
}
