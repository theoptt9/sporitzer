import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from 'src/app/models/Song';


@Injectable({
  providedIn: 'root'
})
export class ActionManagerService {

  constructor(private http: HttpClient) { }

  getArtist() {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists');

  }

  getArtistAt(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists'+id);
  }

  getAlbum() {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums');
  }

  getAlbumAt(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums'+id);
  }
}
