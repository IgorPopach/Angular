import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-open-weather-map',
  templateUrl: './open-weather-map.component.html',
  styleUrls: ['./open-weather-map.component.css']
})
export class OpenWeatherMapComponent implements OnInit {
  weatherData;
  temperarure;
  weatherIcon = '';
  currentCity = 'Serching...';
  InputCity = '';
  constructor(private request: RequestService) {}

  ngOnInit() {
    this.request.geoFindMe();
    setTimeout(() => {
      this.request
        .getWeatherDataByCoord()
        .subscribe(this.Response);
    }, 1000);
  }

  showWeatherByCity() {
    this.request.findByCity(this.InputCity);
    this.request.getWeatherDataByName().subscribe(this.Response);
  }

  Response = response => {
    this.weatherData = response;
    this.currentCity = this.weatherData.name;
    this.weatherIcon = this.weatherData.weather[0].icon;
    this.temperarure = Math.round(this.weatherData.main.temp - 273.15);
    console.log('showWeatherResponse', this.weatherData);
  }
}
