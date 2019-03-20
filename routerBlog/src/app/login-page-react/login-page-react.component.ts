import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page-react',
  templateUrl: './login-page-react.component.html',
  styleUrls: ['./login-page-react.component.css']
})
export class LoginPageReactComponent implements OnInit {
  Form: FormGroup;
  isTonggle: boolean = false;
  constructor() { }

  ngOnInit() {
    this.Form = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    pass: new FormControl('', Validators.required)
  });
  }
  submitForm() {
    this.isTonggle = !this.isTonggle;
    console.log(this.Form);
  }

}
