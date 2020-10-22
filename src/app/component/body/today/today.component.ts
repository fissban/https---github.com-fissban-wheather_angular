import {Component, OnInit, Input} from '@angular/core';
import {Day} from 'src/app/models/Day';
import {HourData} from 'src/app/models/HourData';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit
{
  @Input() dataTodayIn: Day;
  @Input() dataHourIn: HourData;
  constructor() {}

  ngOnInit(): void
  {
  }

}
