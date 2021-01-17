import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthGuard} from './guards/auth-guard';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'login', component: LoginPageComponent , canActivate: [AuthGuard] },
  // default routes:
  { path: '',   redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: StartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
