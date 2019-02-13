import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  Persons: [] = [];
  show = (personProfile: {name: string, pass: string}) => {
    this.Persons.push(personProfile);
    console.log(this.Persons);
  }

  ngOnInit() {
  }

}
