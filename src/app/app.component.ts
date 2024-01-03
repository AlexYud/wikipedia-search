import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { Search } from './interfaces/wikipedia-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages: Search[] = [];

  constructor(private wikipedia: WikipediaService) { }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe({
      next: (searches) => this.pages = searches,
      error: (err) => console.error(err)
    });
  }

}
