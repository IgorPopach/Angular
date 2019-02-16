import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  name = '';
  pass = '';
  @Output() OnLoginInputs = new EventEmitter<{ name: string; pass: string }>();
  submitHandler = () => {
    this.OnLoginInputs.emit({ name: this.name, pass: this.pass });
    this.name = '';
    this.pass = '';
  }

  ngOnInit() {}
}
