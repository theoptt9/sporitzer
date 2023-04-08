import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlist-api',
  templateUrl: './playlist-api.component.html',
  styleUrls: ['./playlist-api.component.less']
})
export class PlaylistApiComponent implements OnInit {
  playlists: Playlist[] = [];
  constructor(public playlistService: PlaylistService) {
   }
   async ngOnInit() {
    this.playlists = await this.getPlaylists();
  }
 async getPlaylists(): Promise<Playlist[]> {
  let i = 0;
  let playlistArray: Playlist[] = [];
  do {
    i++;
    let playlist = await this.playlistService.retrieveOnePlaylist(i);
    playlistArray.push(playlist);
  } while(i<70);
  return playlistArray;
}
}

