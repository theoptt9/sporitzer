import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from 'src/app/models/Song';
import { Playlist } from '../models/Playlist';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { ActionManagerService } from './action-manager.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  playlistArray: Playlist[] = [];
  songArray: Song[] = [];
  albumArray: Album[] = [];
  artistArray: Artist[] = [];

  constructor(public actionService: ActionManagerService, private http: HttpClient) { }

  async searchWith(_criteria: string) {

    let result: (Album | Artist | Song)[] = [];

    this.albumArray = await this.actionService.retrieveAllAlbums();
    this.songArray = await this.actionService.retrieveAllSongs();
    this.artistArray = await this.actionService.retrieveAllArtists();

    this.albumArray.forEach(element => {
      if (element.title.includes(_criteria)) {
        result.push(element)
      }
    });

    this.songArray.forEach(element => {
      if (element.title.includes(_criteria)) {
        result.push(element)
      }
    });

    this.artistArray.forEach(element => {
      if (element.name.includes(_criteria)) {
        result.push(element)
      }
    });

    return result;
  }
}
