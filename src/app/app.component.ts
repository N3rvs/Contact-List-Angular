import { Component } from '@angular/core';
import { USER } from './mock-users';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {
  user: User[] = USER

  selectedUser: User | any;
  displayDialog = false;

  showDialog(user: User) {
    this.selectedUser = user;
    this.displayDialog = true;
  }

  }

