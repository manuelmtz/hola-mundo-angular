import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card-component/user-card-component';

@Component({
  imports: [RouterOutlet, UserCardComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hola-mundo-angular');
}
