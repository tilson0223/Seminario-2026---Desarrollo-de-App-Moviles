import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular'

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SongsModalPage implements OnInit {

  songs: any;
  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.songs = this.navParams.data['songs']
    console.log("recibi: ",this.songs)
  }
  
}
