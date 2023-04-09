import { Component } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Album } from 'src/app/models/Album';
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.less']
})
export class AlbumCardComponent {
  albumArray : Album[] = [];

  constructor(public actionService: ActionManagerService) { }


}
