import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from 'src/app/models/Song';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  protected songs: Array<Song> = [];
  private initialized: boolean = false;

  constructor(private http: HttpClient) { }

  async searchWith(_criteria: String) {

  }

  async retrieveAllSongs() {
    return this.http.get<Array<Song>>('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs');
  }

  /**
   * Get the song's informations.
   * 
   * @param id Id of the song.
   * @returns Song's informations.
   */
  public retrieveOneSong(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs/' + id);
  }
}
