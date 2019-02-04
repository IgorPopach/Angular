import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name = 'Footer';
  onLine = 48;

  siteName = 'test.com';

  getSiteName() {
    return this.siteName;
  }

  constructor() { }

  ngOnInit() {
  }

}
