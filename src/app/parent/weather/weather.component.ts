import { Component, OnInit } from '@angular/core';
import {WeatherService} from 'src/app/service/weather.service'
import { Iweather } from './Iweather';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  meteo 
  constructor(private weather : WeatherService) { }
  ngOnInit(): void {
    this.weather.getweather()
      .subscribe(data => {
        this.meteo = data
        console.log(data);
      }
      );
                      
  }
 
}
