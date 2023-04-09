import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { SearchService } from 'src/app/services/search.service';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/Song';
import { Album } from 'src/app/models/Album';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(public playlistService: PlaylistService,
    public searchService: SearchService,
    public actionService: ActionManagerService) { }

  playlistName: string = "";

  playlistArray: Playlist[] = [];
  songArray: Song[] = [];
  albumArray: Album[] = [];
  artistArray: Artist[] = [];

  async ngOnInit() {
    // this.playlistArray = await this.playlistService.retrievePlaylists();

    this.albumArray = await this.actionService.retrieveAllAlbums();
    this.songArray = await this.actionService.retrieveAllSongs();
    this.artistArray = await this.actionService.retrieveAllArtists();
  }
}
