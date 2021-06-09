import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/seguridad/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UserGuard } from './shared/user/user.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path:'inicio', component: InicioComponent,canActivate:[UserGuard]},
  { path: '**',pathMatch: 'full', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
