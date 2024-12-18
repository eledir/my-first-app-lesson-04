// https://chatgpt.com/g/g-J0FYgDhN5-software-architect-gpt/c/674caa6d-9c94-8001-8439-e90689b66e24
// https://chatgpt.com/c/674cb471-9cb4-8001-87ee-12822c1b6d19
import { Component } from '@angular/core';
import {

  ShopComponent
} from './shop/Shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ShopComponent,
  ],
   
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-shop></app-shop>
      </section>
    </main>

  `,
  
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shops';
}
