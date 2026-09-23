import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  // two-way bound selected filter : [(Selected)]="..."
  Selected = model<string>('all');
  All = input<number>(0);
  Free = input<number>(0);
  premium = input<number>(0);
  ChangeSelectedRadioButton(event : Event){
    this.Selected.set((event.target as HTMLInputElement).value)
  }
}
