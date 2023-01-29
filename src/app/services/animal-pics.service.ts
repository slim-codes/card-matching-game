import { Injectable } from '@angular/core';
import { AnimalPic } from '../interfaces/animal-pic';
import { AnimalsService } from './animals.service';
@Injectable({
  providedIn: 'root',
})
export class AnimalPicsService {
  private animalPics: AnimalPic[] = [
    {
      alt: 'Picture of a dog',
      img: 'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
    },
    {
      alt: 'Image of a Shark inside the ocean',
      img: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      alt: 'A photograph of a spider in a yellow background',
      img: 'https://images.unsplash.com/photo-1596535403955-8216afaacc99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      alt: 'A photo of a lizard on the ground outside',
      img: 'https://images.unsplash.com/photo-1528274725619-40604dc7dad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      alt: ' A picture of parrot with multicolored feathers',
      img: 'https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    {
      alt: 'A picture of a green frog',
      img: 'https://images.unsplash.com/photo-1598537179958-687e6cc625fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    },
    { alt: 'vertebrate', img: '' },
    { alt: 'warm blooded', img: '' },
    { alt: 'cold blooded', img: '' },
    { alt: '6 types/classes of animals', img: '' },
  ];

  animal: AnimalsService;

  constructor() {
    this.animal = new AnimalsService();
  }

  get ANIMALPICS(): AnimalPic[] {
    return this.animalPics;
  }
}

// if object does not contains leftpart,
// render a blank div with rounded corners instead
