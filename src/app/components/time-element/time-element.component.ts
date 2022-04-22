import { Component, Input, OnInit } from '@angular/core';
import { TimeElement } from 'src/app/entities/time_element';

@Component({
  selector: 'app-time-element',
  templateUrl: './time-element.component.html',
  styleUrls: ['./time-element.component.scss']
})
export class TimeElementComponent implements OnInit {

  @Input() timeElement: TimeElement | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getNormalDate(date: string) {
    return date.split('.')[0].split('T')[0] + ', ' + date.split('.')[0].split('T')[1];
  }

}
