import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})


export class DbManagerService {

  constructor(private http: HttpClient) { }

  url = 'https://blog-4c223.firebaseio.com/blog.json';

  saveData(data: any[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, data, { headers: headers });
  }

  getData() {
    return this.http.get(this.url).map((response: Response) => {
      const responseKeys = Object.keys(response)[0];
      console.log('TransformResponse==>', Object.keys(response)[0]);
      const Response = {response, responseKeys};
      return Response;
    });
  }

}
