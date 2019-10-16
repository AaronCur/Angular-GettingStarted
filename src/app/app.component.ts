import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class ='navbar navbar-expanded navbar-light bg-light'>
      <a class = 'navbar-brand'>{{pageTitle}}</a>
      <ul class = 'nav nav-pills'>
        <li><a class ='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class ='nav-link' [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class = 'contatiner'>
      <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}