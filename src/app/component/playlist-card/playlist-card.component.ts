import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.less']
})
export class PlaylistCardComponent implements OnInit {
  @Input() newlibraryName = '';
  playlists: string[] = [];

  constructor() {
    const libraryName = localStorage.getItem('libraries');

    if (libraryName) {
      const playlistsString = localStorage.getItem('libraries') ?? '[]';
      this.playlists = JSON.parse(playlistsString) as string[];
    }
  }

  ngOnInit() {
    const libraryName = localStorage.getItem('libraries');

    if (libraryName) {
      const playlistsString = localStorage.getItem('libraries') ?? '[]';
      this.playlists = JSON.parse(playlistsString) as string[];
    }
  }
}
