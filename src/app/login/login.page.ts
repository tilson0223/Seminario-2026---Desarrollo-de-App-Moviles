import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
}


  loginForm: FormGroup;

//Tarea: añadir los validation_message para el campo password-->
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


  constructor(private formBuilder: FormBuilder) {
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
  }

  }



