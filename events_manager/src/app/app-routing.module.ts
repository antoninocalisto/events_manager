import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import {HomeComponent} from './home/home.component'
import {ConfiguracaoEventoComponent} from './configuracao-evento/configuracao-evento.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'config_event',
    component: ConfiguracaoEventoComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [ AuthGuard ]
  },
  {
    path: "",
    redirectTo: "/login", 
    pathMatch: "full" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
