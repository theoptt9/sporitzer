import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  playlists: Array<Playlist> = []

  constructor(private http: HttpClient) { }

  /**
   * Create a new playlist.
   * 
   * @param _name Name of the playlist.
   * @returns Request to create a new playlist.
   */
  createPlaylist(_name: String) {
    let bodyJson = { name: _name };
    return this.http.post('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists', bodyJson, httpOptions);
  }

  /**
   * Add a new song to the playlist.
   * 
   * @param _playlist Selected playlist.
   * @param _newSongUrl url of the song to add.
   * @returns Request to add a song in a playlist.
   */
  addSong(_playlist: Playlist, _newSongUrl: String) {
    // _newSongUrl : /~morap01/L250/public/index.php/api/songs/{id}

    let songs = _playlist.songs;
    let oldUrlSongs = [];

    songs.forEach(song => {
      oldUrlSongs.push("/~morap01/L250/public/index.php/api/songs/" + song.id);
    });
    oldUrlSongs.push(_newSongUrl);

    let bodyJson = { songs: oldUrlSongs }
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + _playlist.id, bodyJson, httpOptions);
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
    // songUrl : /~morap01/L250/public/index.php/api/songs/{id}

    let songs = _playlist.songs;
    let urlSongs: string[] = [];

    songs.forEach(song => {
      if (song.id != _idSong) {
        urlSongs.push("/~morap01/L250/public/index.php/api/songs/" + song.id);
      }
    });

    let bodyJson = { songs: urlSongs }
    return this.http.patch('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + _playlist.id, bodyJson, httpOptions);
  }

  /**
   * Get the playlist using its id.
   * 
   * @param _id Id of the playlist.
   * @returns Playlist's informations.
   */
  getPlaylistAt(_id: any) {
    return this.http.get('https://mmi.unilim.fr/~morap01/L250/public/index.php/api/playlists/' + _id);
  }
}