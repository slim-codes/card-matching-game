import { Component, Input, OnInit } from '@angular/core';
import { Pair } from '../interfaces/pair';

@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css'],
})
export class MatchingGameComponent implements OnInit {
  @Input() pairs!: Pair[];

  solvedPairs: Pair[] = [];

  unsolvedPairs: Pair[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pairs.forEach((val) => this.unsolvedPairs.push(val));
  }
}
