import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  @ViewChild('Form') Form: NgForm;

  ngOnInit() {
  }

  submitForm(Form: NgForm) {
    console.log(Form);
  }

  load() {
    const loadForm = 'test@example.com';
    this.Form.form.patchValue({
      email: loadForm,
    })
  }

}
