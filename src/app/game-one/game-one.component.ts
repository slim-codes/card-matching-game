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

  // The following IDs are used in correspondence with [ngClass] to manipulate toggle the selected state of a button
  leftpartSelectedId!: number;
  rightpartSelectedId!: number;
  leftpartUnselectedId!: number;
  rightpartUnselectedId!: number;

  onLeftpartSelected(id: number): void {
    this.leftpartSelectedId = id;
  }

  onRightpartSelected(id: number): void {
    this.rightpartSelectedId = id;
  }

  onLeftpartUnselected(): void {
    this.leftpartUnselectedId = -1;
  }

  onRightpartUnselected(): void {
    this.rightpartUnselectedId = -1;
  }
  constructor(Animals: AnimalsService) {
    this.AnimalsService = Animals;
  }

  ngOnInit(): void {
    this.animals = this.AnimalsService.ANIMALS;
  }
}
