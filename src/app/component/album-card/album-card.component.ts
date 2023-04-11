import { Component, Input, OnInit } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Album } from 'src/app/models/Album';
import { Artist } from 'src/app/models/Artist';
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.less']
})
export class AlbumCardComponent implements OnInit {
  albumArray : Album[] = [];
  @Input() albums!: Album[];
  artist!: Artist;
  constructor(public actionService: ActionManagerService) { }

  async ngOnInit() {
    let id = window.location.pathname.split('/').at(-1);
    if (window.location.pathname.split('/').at(1)=='artist') {
      this.artist = await this.actionService.retrieveOneArtist(id);
    } 
  }
}
