import {Component, OnInit, Input} from '@angular/core';
import {Hour} from 'src/app/models/Hour';

@Component
  ({
    selector: 'app-per-hour',
    templateUrl: './per-hour.component.html',
    styleUrls: ['./per-hour.component.css']
  })
export class PerHourComponent implements OnInit
{
  @Input() dataPerHourIn: Hour;

  constructor() {}

  ngOnInit(): void
  {
  }

}
