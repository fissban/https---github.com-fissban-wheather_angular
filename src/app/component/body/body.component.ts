import {Component, OnInit} from '@angular/core';
import {WeatherAPIService} from '../../service/weather-api.service';
import {Weather} from '../../models/Weather';
import {Day} from 'src/app/models/Day';
import {HourData} from 'src/app/models/HourData';
import {Hour} from 'src/app/models/Hour';

@Component
  ({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
  })
export class BodyComponent implements OnInit
{
  // name of city read weather
  city: string = '';
  // all data of weather
  data: Weather;
  // create info for use in 'per-day.component'
  perDay: Day[] = [];
  // create info for use in 'per-hour.component'
  perHour: HourData[] = [];
  // create info for use in 'today.component'
  today: Day = null;
  hour: HourData = null;

  /**
   * Constructor
   * @param service 
   */
  constructor(private service: WeatherAPIService) {}

  async ngOnInit(): Promise<void>
  {
    this.data = await this.service.getData();
    // data send to today component ----------------------------- //

    this.today = this.data.day1;
    this.hour = this.data.hour_hour.hour1;

    // data send to per-day component --------------------------- //
    this.perDay =
      [
        this.data.day1,
        this.data.day2,
        this.data.day3,
        this.data.day4,
        this.data.day5
      ];
    // data send to per-hour component -------------------------- //
    this.perHour =
      [
        this.data.hour_hour.hour1,
        this.data.hour_hour.hour2,
        this.data.hour_hour.hour3,
        this.data.hour_hour.hour4,
        this.data.hour_hour.hour5,
        this.data.hour_hour.hour6,
        this.data.hour_hour.hour7,
        this.data.hour_hour.hour8,
        this.data.hour_hour.hour9,
        this.data.hour_hour.hour10,
        this.data.hour_hour.hour11,
        this.data.hour_hour.hour12,
        this.data.hour_hour.hour13,
        this.data.hour_hour.hour14,
        this.data.hour_hour.hour15,
        this.data.hour_hour.hour16,
        this.data.hour_hour.hour17,
        this.data.hour_hour.hour18,
        this.data.hour_hour.hour19,
        this.data.hour_hour.hour20,
        this.data.hour_hour.hour21,
        this.data.hour_hour.hour22,
        this.data.hour_hour.hour23,
        this.data.hour_hour.hour24,
        this.data.hour_hour.hour25,
      ]
    this.city = this.data.locality.name;


  }

  getLocation()
  {
    if ("geolocation" in navigator)
    {
      console.log('la geolocalización SI está disponible');
      navigator.geolocation.getCurrentPosition(pos =>
      {
        console.log(pos.coords);
      });

    }
    else
    {
      console.log('la geolocalización NO está disponible');
    }
  }
}