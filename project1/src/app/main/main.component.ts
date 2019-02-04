import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Igor Angularovich :)';
  name = '==>Jessica<==';
  button = false;
  className = 'btn btn-primary';
  RocketState = 'ready';
  RocketName = '';
  InputText = '';
  ShowText = '';
  model = 'S';

  start() {
    this.RocketState = 'launch';
    this.button = false;
  }

  constructor() {
    setTimeout( () => {
      this.button = true;
    }, 3000);
  }

  restart (event: Event) {
    this.RocketName = (<HTMLInputElement>event.target).value;
  }

  takeText (event: Event) {
    this.InputText = (<HTMLInputElement>event.target).value;
  }

  show() {
    this.ShowText = this.InputText;
  }

  showModel(ngModel) {
    this.model = ngModel;
  }

}
