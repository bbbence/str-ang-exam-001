import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = new Hero;

  list = this.heroService.getAllHeroes();
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
