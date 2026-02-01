import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonContent, IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class RegistroPage implements OnInit {

  loginForm: FormGroup; 

  errorMessage: string ="";

  validation_messages = {
    email: [
      { type: "requerid", messsage: "El email es obligatorio."},
      { type: "email", message: "Email invalido."}
  ],
    password: [
      { type: 'required', message: "La contraseña es obligatoria" },
      { type: 'minlength', message: "Debe tener mínimo 8 caracteres" }
  ],
    nombres: [
      { type: 'required', message: "Este campo es obligatorio" },
    ],
    apellidos: [
      { type: 'required', message: "Este campo es obligatorio" },

  ]
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private navCtrol: NavController){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
    ),
        password: new FormControl (
          '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
      ])
    ),
    nombres: new FormControl (
          '',
        Validators.compose([
          Validators.required,
          Validators.required
      ])
    ),
    apellidos: new FormControl (
          '',
        Validators.compose([
          Validators.required,
          Validators.required
      ])
    ),
    })
  }
   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    });
  }

  registrar(credentials: any){
    console.log(credentials)
    this.authService.registrar(credentials).then(res=> {
      this.errorMessage = "";
      this.navCtrol.navigateForward("/login")
    }).catch(error =>{
      this.errorMessage = error;
    })
  }

  irALogin() {
    this.router.navigate(['/login']);
  }
}



  

