import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
  providers: [HeroesService], 
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  constructor(private heroesService: HeroesService) {}
  save(): void {
    if (this.hero) {
      this.heroesService.updateHero(this.hero).subscribe(() => {
        console.log('Hero updated successfully');
        // Handle successful update, e.g., navigate back or show a message
      });
    }
  }
}