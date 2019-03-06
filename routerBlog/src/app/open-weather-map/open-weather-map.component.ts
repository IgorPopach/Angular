import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-open-weather-map',
  templateUrl: './open-weather-map.component.html',
  styleUrls: ['./open-weather-map.component.css']
})
export class OpenWeatherMapComponent implements OnInit {
  weatherData = {};
  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.getWeatherData()
    .subscribe((response) => {
      this.weatherData = response;
      console.log(this.weatherData);
    })
  }

}
