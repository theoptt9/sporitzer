import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './services/playlist.service';
import { SearchService } from './services/search.service';
import { ActionManagerService } from './services/action-manager.service';
import { Playlist } from './models/Playlist';
import { Song } from './models/Song';
import { Album } from './models/Album';
import { Artist } from './models/Artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'spotizer';

  playlists: Playlist[] = [];
  songs: Song[] = [];
  albums: Album[] = [];
  artists: Artist[] = [];

  constructor(public playlistService: PlaylistService, public searchService: SearchService, actionManager: ActionManagerService) { }

  ngOnInit() {
    
  }
}
