import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './template/default/default.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients/clients.component'
import { AuthGuard } from './services/auth/auth.guard';
import { ClientsFormComponent } from './clients/clients-form/clients-form.component';
import { ServicesComponent } from './client-service/services/services.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'clients',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ClientsComponent },
      { path: 'new', component: ClientsFormComponent },
      { path: 'new/:id', component: ClientsFormComponent }
    ]
  },
  {
    path: 'services',
    component: DefaultComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ServicesComponent }
    ]
  },
  { path: 'dash', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
