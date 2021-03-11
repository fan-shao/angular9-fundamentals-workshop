import { Component } from '@angular/core';
import { Router } from '@angular/router';

// this is the metadata, this is part of typescript and not angular
// metadata are decorators
// it's a type of function, when it's called, it passes in component configuration object to perform some sort of functionality
// we tell angular how we want this component class to be decorated
@Component({
  // attaches component to the dom
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular 9 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
    { path: '/users', icon: 'person', title: 'Users' },
  ];

  // 2. import router url
  constructor(private router: Router) {}

  // 1. use router service here to navigate to a new url
  // 3. now
  logout() {
    this.router.navigateByUrl('/login');
  }
}
