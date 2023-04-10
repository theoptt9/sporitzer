import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from 'src/app/models/Song';
import { Playlist } from '../models/Playlist';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { ActionManagerService } from './action-manager.service';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  playlistArray: Playlist[] = [];
  songArray: Song[] = [];
  albumArray: Album[] = [];
  artistArray: Artist[] = [];

  constructor(public actionService: ActionManagerService, public playlistService : PlaylistService, private http: HttpClient) { }

  async searchWith(_criteria: string) {

    this.albumArray = await this.actionService.retrieveAllAlbums();
    this.songArray = await this.actionService.retrieveAllSongs();
    this.artistArray = await this.actionService.retrieveAllArtists();
    // this.playlistArray = await this.playlistService.retrieveOnePlaylist();

    return {
      artists : this.artistArray.filter(artist => artist.name.toUpperCase().includes(_criteria.toUpperCase())).slice(0,5),
      songs : this.songArray.filter(song => song.title.toUpperCase().includes(_criteria.toUpperCase())).slice(0,5),
      albums : this.albumArray.filter(album => album.title.toUpperCase().includes(_criteria.toUpperCase())).slice(0,5),
      playlists : this.playlistArray.filter(playlist => playlist.name.toUpperCase().includes(_criteria.toUpperCase())).slice(0,5)
    };
  }
}
