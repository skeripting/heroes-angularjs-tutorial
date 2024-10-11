import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Hero {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  private heroesUrl = 'http://localhost:8080/heroes';  // URL to your backend API
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }
  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}`; // Remove /${hero.id}
    return this.http.put<Hero>(url, hero, this.httpOptions);
  }
  
  // Method to get all heroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
