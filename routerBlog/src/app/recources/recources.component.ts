import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-recources',
  templateUrl: './recources.component.html',
  styleUrls: ['./recources.component.css']
})
export class RecourcesComponent implements OnInit {
  rates = [];
  constructor(public request: RequestService) { }

  ngOnInit() {
    this.request.getData()
      .subscribe((response: any) => {
        this.rates = response;
        console.log(this.rates);
      });
  }
}
