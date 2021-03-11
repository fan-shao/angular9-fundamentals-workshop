import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

// this looks like top level routing module
// big distinction is, this is router module for CHILD
// top level is for ROOT
// ROOT loads all of the routes along with the routing service
// CHILD loads the routes WITHOUT loading the service
// for child or lazy loading modules, use for child, bc you don't want to override routing service

// NEED TO WATCH THE CONTEXT OF THE ROUTES!!!
// we treat the login-routing module like the root
const routes: Routes = [{ path: '', component: LoginComponent }];

// we want to lazy load this login component into main app

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
