import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/modelos/user';
import { ApiUsuarioService } from 'src/app/servicios/api-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../estilos/login.css'],
})
export class LoginComponent implements OnInit {

  hide = true;
  public user: user;
  public identity;
  public token;
  public status: string;
  public aut:boolean
 constructor(
   private _api: ApiUsuarioService,
   private _route: ActivatedRoute,
   private _router: Router


 ) {
   this.user = new user('','','','','','');
  }

 ngOnInit() {
   console.log(this._api.getIdentity());

   console.log(this._api.getToken());
 }


 onSubmit(){
   this.aut = true
   //LOGUEAR AL USUARIO
   this._api.Post(this.user).subscribe(
     response => {
  this.identity = response.user;

  if(!this.identity || !this.identity._id){
 
  }else{
 
    this.identity.pw = '';
    localStorage.setItem('identity',JSON.stringify(this.identity));
   


         //CONSEGUIR TOKEN 
         this._api.Post(this.user, 'true').subscribe(
           response => {
        this.token = response.token;
   
              if(this.token.length <= 0){
               alert('EL TOKEN NO SE HA GENERADO');
              }else{
                  
               

               localStorage.setItem('token',this.token);
   
                this.status= 'sucess';
                this._router.navigate(['/inicio']);
         
                   }
                  
           
         },
         error =>{
                 console.log(<any>error);
               }
             );
       }
     },
     error =>{
       var errorMessage = <any>error;
       if( errorMessage != null){
         var body = JSON.parse(error._body);
         this.status = 'error';
       }
     }
   );

 }


}
