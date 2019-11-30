import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomepageComponent } from './login-homepage/login-homepage.component';


const routes: Routes = [
  { path: '', component: LoginHomepageComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }