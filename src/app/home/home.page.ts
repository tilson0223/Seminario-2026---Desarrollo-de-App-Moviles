import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StorageService } from '../services/storage';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MusicService } from '../services/music';
import { albums } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomePage implements OnInit {

  genres = [
  {
    title: "Musica Clasica",
    image:"https://tse2.mm.bing.net/th/id/OIP.TN1mkKRFHFjmvedS-gRMewHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"Sonidos que no pasan de moda. La música clásica mezcla elegancia, emoción y concentración en cada nota. Ideal para relajarte, estudiar o desconectarte del ruido diario. Piano suave, cuerdas profundas y composiciones que fluyen sin prisa, creando el ambiente perfecto para cualquier momento",
  },
  {
    title: "Salsa",
    image:"https://www.shutterstock.com/image-photo/conga-drum-tumbadora-isolated-on-260nw-2506142405.jpg",
    description:"Ritmo, sabor y corazón latino. La salsa es pura energía, perfecta para bailar, cantar y sentir la música en cada paso. Trompetas, piano y percusión se unen para crear canciones llenas de pasión y movimiento. Dale play y deja que el ritmo te lleve",
  },
  {
    title: "Tropical",
    image:"https://www.shutterstock.com/image-illustration/watercolor-drum-kit-trombone-guitar-260nw-2577365693.jpg",
    description:"Sonidos frescos que saben a verano. La música tropical combina alegría, ritmo y buena vibra para acompañar cualquier momento. Ideal para fiestas, reuniones o simplemente para subir el ánimo. Música que invita a sonreír y disfrutar sin complicaciones",
  },
  {
    title: "Merengue",
    image:"https://st4.depositphotos.com/1811396/22499/v/450/depositphotos_224998990-stock-illustration-musical-instruments-isolated-on-white.jpg",
    description:"Velocidad, alegría y fiesta total. El merengue es energía pura que no deja quedarse quieto. Acordeón, tambora y ritmo contagioso que prende cualquier ambiente. Perfecto para bailar, celebrar y vivir el momento al máximo",
  }
  ]

  tracks: any;
  albums: any;
  localArtists: any;

  colorClaro = 'var(--color-claro)';
  colorOscuro = 'var(--color-oscuro)';
  colorActual = 'this.colorOscuro';
  darkMode = false;


  toggleTheme() {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark-theme');
  }
  constructor(private storageServce: StorageService, private router: Router, private musicService: MusicService
  ) {}

  async ngOnInit () {
    this.getLocalArtists();
    this.loadAlbums();
    this.loadTracks();
    await this.loadStorageData();
    this.simularCargaDatos();   
  }

  loadTracks(){
    this.musicService.getTracks().then(tracks => {
      this.tracks = tracks;
      console.log(this.tracks, "las canciones")
    })
  }

  loadAlbums(){
    this.musicService.getAlbums().then(albums => {
      this.albums = albums;
      console.log(this.albums, "los albums")
    })
  
  }

  async cambiarColor(){
    //if ternario
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
  async simularCargaDatos () {
    const data = await this.obtenerDatosSimulados();
    console.log('Datos simulados: ', data)
  }
  obtenerDatosSimulados(){
    return new Promise(resolve =>{
      setTimeout(() =>{
        resolve(['Rock', 'Pop', 'Jazz'])
      })
    })
   
  }
  
  getLocalArtists(){
    this.localArtists = this.musicService.getLocalArtists();
    console.log("artistas: ",this.localArtists.artists)
  }

  
  }



  //desde el home crear una funcion para ir a ver la intro, la cual se va a conectar con un boton que debemos agregar en el html el cual al hacer clic me lleve a ver la intro


