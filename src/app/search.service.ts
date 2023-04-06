import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  private async _initialize() {
    this.songs = await this.retrieveSongs();
    this.initialized = true;
}

  async retrieveSongs() : Promise<Array<Song>> {
    return new Promise((resolve, reject) => {
      this.retrieveAllSongs().subscribe(
          (songs: Array<string>) => {
              let promises: Array<Promise<any>> = [];
              songs.forEach((value, index, array) => {
                  promises.push(this.retrieveOneSong(value).toPromise());
              })
              Promise.all(promises).then(infos => {
                  console.log(infos);
                  resolve(infos);
              }).catch(reason => {
                  reject(reason);
              })
          },
        (error1: any) => {
              reject(error1);
          }
      )
  });
  }

  async retrieveAllSongs() {
    return this.http.get<Array<Song>>('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs');
  }

  private retrieveOneSong(id: any) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs/'+id);
}

/**
     * Retourne l'index dans le tableau de chanson de l'élément
     * ayant l'id passé en paramètre
     * @param id
     * @private
     */
private _getModelIndexById(id: number) {
  return this.songs.findIndex(function (element) {
  return element.id === id;
  });
}

}
