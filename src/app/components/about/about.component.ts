import { ScrollService } from './../../services/scroll.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @ViewChild('about', { static: false })
  aboutEl!: ElementRef;

  constructor(private scroll: ScrollService) {}

  scrollTo(to: string) {
    if (to === 'about') {
      this.aboutEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.scroll.scrollTo$.subscribe((res) => this.scrollTo(res));
  }
}
