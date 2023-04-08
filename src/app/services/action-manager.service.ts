import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from 'src/app/models/Song';


@Injectable({
  providedIn: 'root'
})
export class ActionManagerService {

  constructor(private http: HttpClient) { }

  /**
   * Get all artists.
   * @returns All artists.
   */
  getArtists() {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists');

  }

  /**
   * Get the artist using its id.
   * 
   * @param id Id of the artist.
   * @returns Artist's informations.
   */
  getArtistAt(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists'+id);
  }

  /**
   * Get all albums.
   * 
   * @returns All albums.
   */
  getAlbums() {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums');
  }

  /**
   * Get the album using its id.
   * 
   * @param id Id of the album.
   * @returns Album's informations.
   */
  getAlbumAt(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums'+id);
  }
}
