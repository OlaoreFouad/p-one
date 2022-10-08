import { Component, OnInit } from '@angular/core';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(public links: LinksService) {}

  ngOnInit(): void {}
}
