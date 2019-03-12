import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})


export class DbManagerService {

  constructor(private http: HttpClient) { }

  url = 'https://blog-4c223.firebaseio.com/blog.json';

  saveData(data: Post) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, data, { headers: headers });
  }

  getData() {
    return this.http.get(this.url).map((response: Response) => {
      console.log('response====>', response);
      const respArr = [];
      const TransformResponse = Object.keys(response).map((key) => {
        console.log('response[key]', response[key]);
        return respArr.concat(response[key]);
      });
      console.log('TransformResponse==>', TransformResponse);
      const Response = {TransformResponse};
      return Response;
    });
  }

}
