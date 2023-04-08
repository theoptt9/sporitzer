import { Component } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Album } from 'src/app/models/Album';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-artists-api',
  templateUrl: './artists-api.component.html',
  styleUrls: ['./artists-api.component.less']
})
export class ArtistsApiComponent{
  artist : Artist | undefined;

  constructor(public actionService: ActionManagerService) { }
}
