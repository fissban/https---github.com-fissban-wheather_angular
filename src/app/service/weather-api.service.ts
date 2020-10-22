import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weather} from '../models/Weather';

@Injectable({providedIn: 'root'})
export class WeatherAPIService
{
  URL: string = 'https://api.tutiempo.net/json/?';
  API_KEY: string = 'apid=asDXaza4aXq4ycq';
  CITY_ID: string = 'lid=43234'; // Plottier
  LANGUAGE: string = 'lan=en';

  constructor(private http: HttpClient) {}

  async getData(): Promise<Weather>
  {
    try
    {
      return await this.http.get<Weather>(this.URL + this.LANGUAGE + '&' + this.API_KEY + '&' + this.CITY_ID).toPromise();
    }
    catch (e)
    {
      console.log(e);
    }
  }
}
