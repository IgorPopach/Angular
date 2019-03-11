import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  urlWeatherByCoord;
  currentCityName = 'Rivne';
  urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${this.currentCityName}&appid=558389224c7b46b0434be8ef3129403b`;
  constructor(private request: HttpClient) { }
  getData() {
    return this.request.get(this.url).map((response: Response) => {
      return response;
    });
  }
  geoFindMe() {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      return;
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.urlWeatherByCoord = `http://api.openweathermap.org/data/2.5/weather?lat=` +
      `${latitude}&lon=${longitude}&appid=558389224c7b46b0434be8ef3129403b`;
    }
    function error() {
      console.log('Unable to retrieve your location');
    }
    console.log('Locating…');
    navigator.geolocation.getCurrentPosition(success, error);
  }
  getWeatherDataByCoord() {
    console.log('this.urlWeather', this.urlWeatherByCoord);
    return this.request.get(this.urlWeatherByCoord).map((response: Response) => {
      return response;
    });
  }
  getWeatherDataByName() {
    console.log('this.urlWeather', this.urlWeather);
    return this.request.get(this.urlWeather).map((response: Response) => {
      return response;
    });
  }
  findByCity(cityName) {
    this.urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=558389224c7b46b0434be8ef3129403b`;
  }
}
