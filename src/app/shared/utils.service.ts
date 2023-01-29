import { Injectable } from '@angular/core';
import { Pair } from '../interfaces/pair';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  remove(array: Array<Pair>, item: Pair) {
    let [index, deleteCount] = [array.indexOf(item), 1];
    if (index > -1) {
      array.splice(index, deleteCount);
    }
  }
}
