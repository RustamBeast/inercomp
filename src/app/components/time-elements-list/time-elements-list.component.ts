import { Component, Input, OnInit } from '@angular/core';
import { TimeElement } from 'src/app/entities/time_element';

@Component({
  selector: 'app-time-elements-list',
  templateUrl: './time-elements-list.component.html',
  styleUrls: ['./time-elements-list.component.scss']
})
export class TimeElementsListComponent implements OnInit {

  @Input() timeElements: TimeElement[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
