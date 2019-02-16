import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  name = '';
  pass = '';
  @Output() OnTakeInputs = new EventEmitter<{ name: string, pass: string }>();
  registerHandler = () => {
    this.OnTakeInputs.emit({ name: this.name, pass: this.pass });
    this.name = '';
    this.pass = '';
  }

  ngOnInit() {
  }

}
