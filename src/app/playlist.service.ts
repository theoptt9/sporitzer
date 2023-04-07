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

  /**
   * Create a new playlist.
   * 
   * @param body Body to send to the server.
   * @returns POST
   */
  createPlaylist(body: String) {
    return this.http.post('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists', body, httpOptions);
  }

  /**
   * Add a new song to the playlist.
   * 
   * @param id Id of the song.
   * @param body Body to send to the server.
   * @returns 
   */
  addSong(id: number, body: String) {
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + id, body, httpOptions);
  }

  /**
   * Delete a song in the playlist.
   * 
   * @param id Id of the song.
   * @param body Body to send to the server.
   * @returns 
   */
  delSong(id: number, body: String) {
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + id, body, httpOptions);
  }

  /**
   * Get the playlist using its id.
   * 
   * @param id Id of the playlist.
   * @returns Playlist's informations.
   */
  getPlaylistAt(id: number) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + id);
  }
}
