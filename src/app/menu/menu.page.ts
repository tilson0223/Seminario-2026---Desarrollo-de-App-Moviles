import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {

  constructor(private storage: Storage, private router: Router
  ) { }

  ngOnInit() {
  }

  goToIntro() {
    console.log("ir hacia la intro")
  }

async cerrarSesion() {
    await this.storage.remove('isLoggedIn');
    await this.storage.remove('user');
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}

