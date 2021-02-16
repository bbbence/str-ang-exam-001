import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getAllHeroes(): Hero[] {
    return this.list;
  }


  list: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      superPower: 'flight',
      address: 'Metropolis'
    },
    {
      id: 2,
      name: 'Wonder Woman',
      superPower: 'strength',
      address: 'Themyscira'
    },
    {
      id: 3,
      name: 'Wolverine',
      superPower: 'claws',
      address: 'Canada'
    },
    {
      id: 4,
      name: 'Catwoman',
      superPower: 'stealth',
      address: 'Gotham'
    },
    {
      id: 5,
      name: 'Jean Grey',
      superPower: 'telekinesis',
      address: 'New York'
    },
    {
      id: 6,
      name: 'Thor',
      superPower: 'thunder',
      address: 'Asgard'
    }
  ];

  constructor() { }
}