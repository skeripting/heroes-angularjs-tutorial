import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroesService } from '../heroes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent, HttpClientModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes = HEROES;
  constructor(private heroesService: HeroesService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
