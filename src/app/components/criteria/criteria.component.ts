import { LinksService } from './../../services/links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss'],
})
export class CriteriaComponent implements OnInit {
  constructor(public links: LinksService) {}

  ngOnInit(): void {}
}
