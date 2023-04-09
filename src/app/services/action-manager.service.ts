import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from '../models/Song';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ActionManagerService {

  songArray: Song[] = [];
  albumArray: Album[] = [];
  artistArray: Artist[] = [];
  private initialized: boolean = false;

  constructor(private http: HttpClient) { }

  private async _initialize() {
    this.songArray = await this.retrieveSongs();
    this.albumArray = await this.retrieveAlbums();
    this.artistArray = await this.retrieveArtists();
    this.initialized = true;
  }

  async retrieveAllSongs(): Promise<Array<Song>> {
    if (this.initialized) {
        return this.songArray;
    } else {
        try {
            await this._initialize();
        } catch (e) {
            console.error(e);
        }
        return this.songArray;
    }
}

async retrieveAllAlbums(): Promise<Array<Album>> {
  if (this.initialized) {
      return this.albumArray;
  } else {
      try {
          await this._initialize();
      } catch (e) {
          console.error(e);
      }
      return this.albumArray;
  }
}

async retrieveAllArtists(): Promise<Array<Artist>> {
  if (this.initialized) {
      return this.artistArray;
  } else {
      try {
          await this._initialize();
      } catch (e) {
          console.error(e);
      }
      return this.artistArray;
  }
}

  get songs(): Array<Song> {
    return this.songArray;
  }

  get albums(): Array<Album> {
    return this.albumArray;
  }

  get artists(): Array<Artist> {
    return this.artistArray;
  }

  async retrieveArtists(): Promise<Array<Artist>> {
    return new Promise((resolve, reject) => {
      this.getArtists().subscribe(
        (artists: Array<string>) => {
          let promises: Array<Promise<any>> = [];
          artists.forEach((value, index, array) => {
            promises.push(this.getArtistAt(value).toPromise());
          })
          Promise.all(promises).then(infos => {
            console.log(infos);
            resolve(infos);
          }).catch(reason => {
            reject(reason);
          })
        },
        error1 => {
          reject(error1);
        }
      )
    });
  }

  /**
   * Get all artists.
   * @returns All artists.
   */
  getArtists() {
    return this.http.get<Array<string>>('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists');
  }

  /**
   * Get the artist using its id.
   * 
   * @param id Id of the artist.
   * @returns Artist's informations.
   */
  getArtistAt(id: any) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/artists' + id);
  }

  async retrieveAlbums(): Promise<Array<Album>> {
    return new Promise((resolve, reject) => {
      this.getAlbums().subscribe(
        (albums: Array<string>) => {
          let promises: Array<Promise<any>> = [];
          albums.forEach((value, index, array) => {
            promises.push(this.getArtistAt(value).toPromise());
          })
          Promise.all(promises).then(infos => {
            console.log(infos);
            resolve(infos);
          }).catch(reason => {
            reject(reason);
          })
        },
        error1 => {
          reject(error1);
        }
      )
    });
  }

  /**
   * Get all albums.
   * 
   * @returns All albums.
   */
  getAlbums() {
    return this.http.get<Array<string>>('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums');

  }

  /**
   * Get the album using its id.
   * 
   * @param id Id of the album.
   * @returns Album's informations.
   */
  getAlbumAt(id: any) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/albums' + id);
  }

  async retrieveSongs(): Promise<Array<Song>> {
    return new Promise((resolve, reject) => {
      this.getSongs().subscribe(
        (songs: Array<string>) => {
          let promises: Array<Promise<any>> = [];
          songs.forEach((value, index, array) => {
            promises.push(this.getArtistAt(value).toPromise());
          })
          Promise.all(promises).then(infos => {
            console.log(infos);
            resolve(infos);
          }).catch(reason => {
            reject(reason);
          })
        },
        error1 => {
          reject(error1);
        }
      )
    });
  }

  getSongs() {
    return this.http.get<Array<string>>('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs');
  }

  /**
   * Get the song's informations.
   * 
   * @param id Id of the song.
   * @returns Song's informations.
   */
  public getSongAt(id: any) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/songs/' + id);
  }
}
