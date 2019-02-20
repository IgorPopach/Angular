import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  arr = ['green', 24, 35, 4, 16, 58, 46];
  active = 1;
  BgColor = '#000';

  onClick(item: number) {
    this.active = item;
    this.BgColor = item;
    console.log('BgColor', this.BgColor);
  }
}
