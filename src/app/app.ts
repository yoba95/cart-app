import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartApp } from './components/cart-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartApp],
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('3-cart-app');
}
