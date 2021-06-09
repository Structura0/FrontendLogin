import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiUsuarioService } from '../../servicios/api-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private _api: ApiUsuarioService,
    private router:Router){

}
  canActivate() {
    let identity = this._api.getIdentity();
  
    if (identity && identity.rol == 'admi') {
      // login TRUE
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
