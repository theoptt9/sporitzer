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
  artist: Artist | undefined;
  @Input() albums!: Album[];
  constructor(public actionService: ActionManagerService) { }

  async ngOnInit() {

  }
}
