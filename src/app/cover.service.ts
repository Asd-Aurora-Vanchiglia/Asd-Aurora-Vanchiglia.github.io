import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverService {

  cover: Subject<CoverObject>;
  constructor() {
    this.cover = new Subject<CoverObject>();
  }

}
export class CoverObject {
  cover: string;
  title: string;
}
