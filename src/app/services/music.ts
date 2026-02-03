import { Injectable } from '@angular/core';
import * as dataArtists from './artistas.json'


@Injectable({
  providedIn: 'root',
})
export class MusicService {
  
  urlServer: string = "https://music.fly.dev";
  

  constructor() { }

    getTracks() {
      return fetch (`${this.urlServer}/tracks`).then(
        response => response.json()
      );
    }
  
  getAlbums(){
    return fetch (`${this.urlServer}/albums`).then(
        response => response.json()
      );

  }
  getLocalArtists () {
    return dataArtists;
  }

  getSongsByAlbum(albumId: string) {
    return fetch (`${this.urlServer}/tracks/album/${albumId}`).then(
    response => response.json()
    );
  }
  
  getSongsByArtist(artistId: string) {
    return fetch (`${this.urlServer}/tracks/artist/${artistId}`).then(
    response => response.json()
    );
  }
  //crear un srcicio paa btener los artistas desde el servidor api
  //crear un servicio para obtener las canciones de un artista /tracks/artist/1
  }