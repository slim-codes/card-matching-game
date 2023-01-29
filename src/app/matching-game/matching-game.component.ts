import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Pair } from '../interfaces/pair';
import { UtilsService } from '../shared/utils.service';
import { Subject, Observable, Subscription, partition } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';
@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css'],
})
export class MatchingGameComponent implements OnInit {
  utilsService: UtilsService;

  solvedPairs: Pair[] = [];

  unsolvedPairs: Pair[] = [];

  // leftpart_temp is the name assigned to the template retrieved by contentChild

  @ContentChild('leftpart', { static: false })
  public leftpart_temp!: TemplateRef<any>;
  @ContentChild('rightpart', { static: false })
  public rightpart_temp!: TemplateRef<any>;

  @Input() pairs!: Pair[];

  @Output() leftpartSelected: EventEmitter<number> = new EventEmitter();
  @Output() rightpartSelected: EventEmitter<number> = new EventEmitter();

  @Output() leftpartUnselected = new EventEmitter<void>();
  @Output() rightpartUnselected = new EventEmitter<void>();

  // Why Subject instead of pure observable?
  // Because the subject is both the producer and the consumer
  // The resulting Observables sp;it from the subject can subscribe to the producer
  assignmentStream = new Subject<{ pair: Pair; side: string }>();

  private solvedStream = new Observable<Pair>();
  private failedStream = new Observable<string>();

  private s_Subscription!: Subscription;
  private f_Subscription!: Subscription;

  constructor(utilsService: UtilsService) {
    this.utilsService = utilsService;
  }
  ngOnInit(): void {
    this.pairs.forEach((val) => this.unsolvedPairs.push(val));

    const stream = this.assignmentStream.pipe(
      pairwise(),
      // filter here will ensure that the clicks are unique (to prevent passing duplicates from the pairwise array).
      // If the sides are not different, ignore
      filter((combination) => combination[0].side != combination[1].side)
    );
    const [stream1, stream2] = partition(
      stream,
      (combination) => combination[0].pair === combination[1].pair
    );

    this.solvedStream = stream1.pipe(map((combination) => combination[0].pair));
    this.failedStream = stream2.pipe(map((combination) => combination[0].side));

    this.s_Subscription = this.solvedStream.subscribe((pair) =>
      this.handleSolvedAssignment(pair)
    );
    this.f_Subscription = this.failedStream.subscribe((side) =>
      this.handleFailedAssignment(side)
    );
  }

  ngOnDestroy() {
    // free memory on game exit
    this.s_Subscription.unsubscribe();
    this.f_Subscription.unsubscribe();
  }

  // TODO: Move similar functions (remove, assignmentHandlers etc) to shared service directory
  // Implement trackBy for both games
  private handleSolvedAssignment(pair: Pair): void {
    this.solvedPairs.push(pair);
    this.utilsService.remove(this.unsolvedPairs, pair);
    // unselect items in new div
    this.leftpartUnselected.emit();
    this.rightpartUnselected.emit();

    // this.test = Math.random() * 10;
  }
  private handleFailedAssignment(side1: string): void {
    if (side1 == 'left') {
      this.leftpartUnselected.emit();
    }
    this.rightpartUnselected.emit();
  }

  // return id of changed element to trackBy
  trackItemsById(index: number, value: Pair) {
    return value.id;
  }
}
