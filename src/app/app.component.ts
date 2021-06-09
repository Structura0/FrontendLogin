import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './modelos/user';
import { ApiUsuarioService } from './servicios/api-usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  public identity;
  public token;
modelo: user


  constructor(
    private _api: ApiUsuarioService,
    private _router: Router
  ){

  }
  ngOnInit(){
    this.identity = this._api.getIdentity();
    this.token = this._api.getToken();
  }
  ngDoCheck(){
    this.identity = this._api.getIdentity();
    this.token = this._api.getToken();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio'])
  }

}
