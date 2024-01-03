import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WikipediaResponse } from './interfaces/wikipedia-response';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(
    private http: HttpClient,
  ) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      map(ev => ev?.query?.search)
    );
  }
}
