import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {
    isLastSlide = false;

  constructor (
  private router: Router,
  private storage: Storage ){}
  
  async onSlideChange(event: any) {
    const swiper = event.target.swiper;
    this.isLastSlide = swiper.isEnd;
  }
  
  async finalizarIntro() {
  await this.storage.set('introVisto', true);
  this.router.navigateByUrl('/home',);
}
  

  ngOnInit() {
  }

  goBack(){
    console.log("Volver")
    this.router.navigateByUrl('/home',);
  }
  //al vovler al home guardar en el storage que ya vi la pagina de intro
}
