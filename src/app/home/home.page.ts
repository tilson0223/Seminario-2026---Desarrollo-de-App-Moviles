import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StorageService } from '../services/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomePage implements OnInit {
  colorClaro = 'var(--color-claro)';
  colorOscuro = 'var(--color-oscuro)';
  colorActual = 'this.colorOscuro';
  darkMode = false;


  toggleTheme() {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark-theme');
  }
  constructor(private storageServce: StorageService) {}

  async ngOnInit () {
    await this.loadStorageData();
  }

  async cambiarColor(){
    this.colorActual = this.colorActual === this.colorOscuro ? this.colorClaro : this.colorOscuro
    await this.storageServce.set('theme', this.colorActual)
    console.log('Tema Guardado: ', this.colorActual)
  }

  async loadStorageData () {
    const savedTheme = await this.storageServce.get('theme');
    if (savedTheme) {
      this.colorActual = savedTheme;
    }
    
  }

  //desde el home crear una funcion para ir a ver la intro, la cual se va a conectar con un boton que debemos agregar en el html el cual al hacer clic me lleve a ver la intro

}
