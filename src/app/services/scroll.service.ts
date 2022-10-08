import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollTo = new Subject<string>();

  scrollTo$ = this.scrollTo.asObservable();

  constructor() {}

  updateScrollTo(section: string) {
    this.scrollTo.next(section);
  }
}
