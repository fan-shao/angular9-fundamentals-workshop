import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginRoutingModule } from './login/login-routing.module';

const routes: Routes = [
  // path home is assigned component called HomeComponent, which is going to be put into the router outlet
  // this is an object
  // order of the paths matter

  // when lazy loading, add that to the addchild route
  // instead of loading component, we are going to load children
  // load children makes an async call to load module whereever the pointer is
  // the import is going to return a promise, and we are going to unpack/return a module within it

  // basically load children is going to call import, which points to login module, and it will return the entire file
  // in the promise, we extract loginModule class and add it to angular
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((module) => module.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((module) => module.UsersModule),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
