import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/Song';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { PlaylistService } from 'src/app/services/playlist.service';


@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.less']
})
export class LibraryDetailComponent implements OnInit {
  playlist: Playlist | undefined;
  songs!: Song[];
  constructor(private route: ActivatedRoute, public actionService: ActionManagerService, public playlistService: PlaylistService) {
  }

  async ngOnInit() {
    let id = window.location.pathname.split('/').at(2);
    this.playlist = await this.playlistService.retrieveOnePlaylist(id);
    this.songs = await Promise.all(this.playlist.songs.map(url=>this.actionService.retrieveOneSong(id)));
  }
}
