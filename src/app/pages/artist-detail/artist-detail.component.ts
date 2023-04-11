import { Component, OnInit } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Artist } from 'src/app/models/Artist';
import { Album } from 'src/app/models/Album';
@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.less']
})
export class ArtistDetailComponent implements OnInit {
  albumArray : String[] = [];
  artist : Artist | undefined;
  albums!: Album[];
  constructor(public actionService: ActionManagerService) { }
  async ngOnInit() {
    let id = window.location.pathname.split('/').at(-1);
    this.artist = await this.actionService.retrieveOneArtist(id);
    this.albumArray = this.artist.albums;
    this.albums = await Promise.all(this.artist.albums.map(url=>this.actionService.retrieveOneAlbum(url.split('/').at(-1))));
  }
}
