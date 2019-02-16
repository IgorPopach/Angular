import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
  @Input() person: {name: string, pass: string, success: boolean};
  isToggleOn = false;

  getColor = () => {
    if (this.person.success === true) {
      return 'green';
    } else {
      return 'red';
    }
  }
  showInfo = () => {
    this.isToggleOn = !this.isToggleOn;
  }
  ngOnInit() {
  }

}
