import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  //[Tarea]: Crear un nuevo guards que cuando intente entrar al home me valide si estoy logeado, sino redireccionar a login

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
}


  loginForm: FormGroup;

  errorMessage: string ="";

  validation_messages = {
    email: [
      {
        type: "requerid", messsage: "El email es obligaotorio."
      },
      {
        type: "email", message: "Email invalido."
      }
  ],
  password: [
    { type: 'required', message: "La contraseña es obligatoria" },
    { type: 'minlength', message: "Debe tener mínimo 6 caracteres" }
  ]
  }


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private navCtrol: NavController) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
      ])
    )         
    })
   }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials)
    this.authService.loginUser(credentials).then(res=> {
      this.errorMessage = "";
      this.navCtrol.navigateForward("/home")
    }).catch(error =>{
      this.errorMessage = error;
    })


  }

  }



