import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term: string = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) this.term = target.value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
