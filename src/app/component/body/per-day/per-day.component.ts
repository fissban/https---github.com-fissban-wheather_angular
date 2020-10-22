import {Component, OnInit, Input} from '@angular/core';
import {Day} from 'src/app/models/Day';

@Component
  ({
    selector: 'app-per-day',
    templateUrl: './per-day.component.html',
    styleUrls: ['./per-day.component.css']
  })
export class PerDayComponent implements OnInit
{
  @Input() dataPerDayIn: Day[] = [];
  actualDate: String;


  constructor() {}

  ngOnInit(): void
  {
    let date: Date = new Date();
    this.actualDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

}
