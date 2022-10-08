import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor() {}

  openLink() {
    window.open(environment.applicationUrl, '_blank');
  }
}
