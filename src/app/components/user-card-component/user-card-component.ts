import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card-component',
  standalone:true,
  imports: [],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.css',
})
export class UserCardComponent {

  isLoggedIn:boolean = false;
  items = ['Angular 18+', 'Signals', 'Standalone Components'];

}
