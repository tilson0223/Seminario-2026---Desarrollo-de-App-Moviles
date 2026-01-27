import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';//

@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanActivate {
  
    //obtener del storage si ya vi la intro y dependiendo del resultado dejar pasar o no hacia el home
    //en caso false (o sea no vi la intro aun) redireccionar con angular router hacia la intro nuevamente

  constructor(
    private storage: Storage,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    await this.storage.create();

    const introVisto = await this.storage.get('introVisto');

    if (introVisto) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
  
}

