import { Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { Artist } from 'src/app/models/Artist';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/Song';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  results!: { artists: Artist[], songs: Song[], playlists: Playlist[], albums: Album[] };
  artists: Artist[] = []
  songs: Song[] = []
  albums: Album[] = []
  playlists: Playlist[] = []

  criteria: string = "";


  constructor(public searchService: SearchService) { }


  async searching() {
    this.results = await this.searchService.searchWith(this.criteria);
  }
}
