import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  arr = [1, 2, 3, 4, 16, 58, 46];
  arrColor = ['yellow', 'orange', 'red', 'purple', 'blue', 'green', 'light-green'];
  active = 1;
  BgColor = 'white';

  onClick(item: number) {
    this.active = item;
    this.BgColor = this.arrColor[item];
  }
}
