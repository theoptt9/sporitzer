import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Song } from 'src/app/models/Song';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }


  createPlaylist(body: String) {
    return this.http.post('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists', body, httpOptions);
  }

  addSong(id: number, body: String) {
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + id, body, httpOptions);
  }

  delSong(id: number, body: String) {
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + id, body, httpOptions);
  }

  getPlaylistAt(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + id);
  }
}
