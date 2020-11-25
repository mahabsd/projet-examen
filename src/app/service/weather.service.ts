import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Iweather} from 'src/app/parent/weather/Iweather'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getweather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=7a3ee530470563c85d7519dfe8053933');
  }
}
