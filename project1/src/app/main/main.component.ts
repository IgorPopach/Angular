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
  rocketStatus = Math.random() > 0.5 ? 'succes' : 'fail';
  btnPressed = false;
  persons = ['Jack', 'Bill', 'Bob'];
  date = new Date();

  start() {
    this.RocketState = 'launch';
    this.button = false;
    this.btnPressed = !this.btnPressed;
  }
  getColor() {
    return this.rocketStatus === 'succes' ? 'green' : 'red';
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

  getTime() {
    const hours = this.date.getHours();
    return (hours >= 7 && hours <= 18) ? 'yellow' : 'black';
  }

}
