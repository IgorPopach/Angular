import { Component } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent {
  name = 'type name';
  storeNames = null;
  isTongleOn = false;
  btnName = 'Show all names';
  constructor() { }

  takeName = (event: Event) => {
    this.name = (<HTMLInputElement>event.target).value;
  }

  getColor = (name) => {
    const nameLenght = name.length;
    if (nameLenght >= 3 && nameLenght < 8) {
      return 'red';
    } else if (nameLenght >= 8 && nameLenght < 12) {
      return 'green';
    } else if (nameLenght >= 12) {
      return 'yellow';
    }
  }

  saveName = () => {
    const store = JSON.parse(localStorage.getItem('names'));
    if ( store === null) {
      const names: string[] = [];
      names.push(this.name);
      localStorage.setItem('names', JSON.stringify(names));
    } else {
      store.push(this.name);
      localStorage.setItem('names', JSON.stringify(store));
    }
    alert(`Name ${this.name} saved`);
  }

  showNames = () => {
    this.storeNames = JSON.parse(localStorage.getItem('names'));
    this.isTongleOn = !this.isTongleOn;
    this.btnName = this.isTongleOn === true ? 'Hide all names' : 'Show all names';
  }
}
