import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(){ }

  loginUser(credentials: any){
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
registrar(credentials: any){
    return new Promise((accept, reject) =>{
      if (
        credentials.nombres == "Tilson Gabriel",
        credentials.apellidos == "Arias Anillo",
        credentials.email == "tilson@gmail.com",
        credentials.password == "123456789"
      ){
        accept("registro correcto")
      }else{
        reject("registro incorrecto")
      }
  }) 
}
}



