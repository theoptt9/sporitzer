import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Song } from 'src/app/models/Song';
import { SearchService } from './search.service';
import { Playlist } from '../models/Playlist';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  protected playlists: Array<Playlist> = []

  constructor(public search: SearchService, private http: HttpClient) { }

  /**
   * Create a new playlist.
   * 
   * @param _name Name of the playlist.
   * @returns POST
   */
  createPlaylist(_name: String) {
    let bodyJson = { name: _name };
    return this.http.post('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists', bodyJson, httpOptions);
  }

  /**
   * Add a new song to the playlist.
   * 
   * @param _id Id of the playlist.
   * @param _song Song to add.
   * @returns Request to add a song in a playlist.
   */
  addSong(_id: number, _song: Song) {
    let bodyJson = { songs: [_song] }
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + _id, bodyJson, httpOptions);
  }

  /**
   * Delete a song in a selected playlist.
   * 
   * @param _playlist Selected playlist.
   * @param _idSong id of the song to delete.
   * 
   * @returns Request to delete a song in a playlist.
   */
  delSong(_playlist: Playlist, _idSong: number) {

    let songs = _playlist.songs;
    let updatedSongs = songs.filter(song => song.id != _idSong);

    let bodyJson = { songs: updatedSongs }
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + _playlist.id, bodyJson, httpOptions);
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
