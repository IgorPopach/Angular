import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})


export class DbManagerService {

  constructor(private http: HttpClient) { }

  baseUrl = `https://blog-4c223.firebaseio.com/blog`;

  saveData(data: Post) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}.json`, data, { headers: headers });
  }

  deleteData(key: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${key}.json`);
  }

  getData() {
    return this.http.get(`${this.baseUrl}.json`).map((response: Response) => {
      console.log('response====>', response);
      return response;
    });
  }

}
