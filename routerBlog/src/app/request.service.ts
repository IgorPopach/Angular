import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=558389224c7b46b0434be8ef3129403b';
  constructor(private request: HttpClient) { }
  getData() {
    return this.request.get(this.url).map((response: Response) => {
      return response;
    });
  }
  getWeatherData() {
    return this.request.get(this.urlWeather).map((response: Response) => {
      return response;
    });
  }
}
