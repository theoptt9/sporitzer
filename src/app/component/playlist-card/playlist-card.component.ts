import { Component, Input, OnInit} from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.less']
})
export class PlaylistCardComponent implements OnInit {
  @Input() newlibraryName = '';
  playlists: string[] = [];

  constructor(public playlistService : PlaylistService) {
    const libraryName = localStorage.getItem('libraries');

    if (libraryName) {
      const playlistsString = localStorage.getItem('libraries') ?? '[]';
      this.playlists = JSON.parse(playlistsString) as string[];
    }
  }

  ngOnInit() {
    const libraryName = localStorage.getItem('libraries');

    if (libraryName) {
      // OLD
      const playlistsString = localStorage.getItem('libraries') ?? '[]';
      this.playlists = JSON.parse(playlistsString) as string[];

      //NEW
      //this.playlists = await this.playlistService.retrievePlaylists();
    }
  }
}
