import { Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card-component/user-card-component';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from './services/users';
@Component({
  imports: [RouterOutlet, UserCardComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hola-mundo-angular');
  count = signal(0);
  private userSerice= inject(UsersService);

  increment()
  {
    this.count.update(value => value+1);
  }

  reset()
  {
    this.count.set(0);  
  }

  doubleCount= computed(() => this.count() *2);

  users=toSignal(this.userSerice.getUsers(), {initialValue:[]});
}
