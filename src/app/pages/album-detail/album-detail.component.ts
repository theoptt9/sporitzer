import { Component, Input, OnInit } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Album } from 'src/app/models/Album';
import { Song } from 'src/app/models/Song';
import { PlaylistService } from 'src/app/services/playlist.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.less']
})
export class AlbumDetailComponent implements OnInit {
  albumArray : Album[] = [];
  album: Album | undefined;
  @Input() songs!: Song[];

  constructor(public actionService: ActionManagerService, public playlistService: PlaylistService) {

  }
  async ngOnInit() {
    let id = window.location.pathname.split('/').at(2);
    this.album = await this.actionService.retrieveOneAlbum(id);
    this.songs = await Promise.all(this.album.songs.map(url=>this.actionService.retrieveOneSong(id)));
  }
}
