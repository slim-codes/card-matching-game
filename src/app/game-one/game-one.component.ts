import { Component, OnInit } from '@angular/core';
import { Pair } from '../interfaces/pair';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css'],
})
export class GameOneComponent implements OnInit {
  AnimalsService: AnimalsService;

  animals!: Pair[];
  constructor(AnimalsService: AnimalsService) {
    this.AnimalsService = AnimalsService;
  }

  ngOnInit(): void {
    this.animals = this.AnimalsService.ANIMALS;
  }
}
