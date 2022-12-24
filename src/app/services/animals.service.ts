import { Injectable } from '@angular/core';
import { Pair } from '../interfaces/pair';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private Animals: Pair[] = [
    { id: 1, leftpart: 'dog', rightpart: 'mammal' },
    { id: 2, leftpart: 'shark', rightpart: 'fish' },
    { id: 3, leftpart: 'spider', rightpart: 'insect/invertebrate' },
    { id: 4, leftpart: 'lizard', rightpart: 'reptile' },
    { id: 5, leftpart: 'parrot', rightpart: 'bird' },
    { id: 6, leftpart: 'frog', rightpart: 'amphibian' },
    { id: 7, leftpart: 'vertebrate', rightpart: 'back-boned' },
    {
      id: 8,
      leftpart: 'warm-blooded',
      rightpart:
        'able to regulate their temperature with respect to the environment',
    },
    {
      id: 9,
      leftpart: 'cold-blooded',
      rightpart: 'unable to regulate their internal heat',
    },
    {
      id: 10,
      leftpart: '6 types of animals',
      rightpart:
        'amphibians, reptiles, mammals, birds, fish, invertebrates/insects',
    },
  ];

  get ANIMALS(): Pair[] {
    return this.Animals;
  }
  constructor() {}
}
