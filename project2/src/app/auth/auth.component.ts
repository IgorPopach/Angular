import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  PersonsStore: [{ name: string; pass: string }] = [
    { name: 'test', pass: 'test' }
  ];
  LoginStore: [{ name: string; pass: string; success: boolean }] = [
    { name: 'test', pass: 'test', success: true }
  ];
  saveProfile = (personProfile: { name: string; pass: string }) => {
    this.PersonsStore.push(personProfile);
  }
  check = (loginInputs: { name: string; pass: string }) => {
    let checkLogin = null;
    checkLogin = this.PersonsStore.some(person => {
      return person.name === loginInputs.name && person.pass === loginInputs.pass;
    });
    const loginPerson: any = {...loginInputs};
    if (checkLogin) {
      loginPerson.success = true;
    } else {
      loginPerson.success = false;
    }
    this.LoginStore.push(loginPerson);
  }

  ngOnInit() {}
}
