import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(){ }

  loginUser(credentials: any){
    //[Tarea]: si el login es exitoso guardar en el storage
    return new Promise((accept, reject) =>{
      if (
        credentials.email == "tilson@gmail.com" &&
        credentials.password == "123456789"
      ){
        accept("login correcto")
      }else{
        reject("login incorrecto")
      }
  }) 
}
}
