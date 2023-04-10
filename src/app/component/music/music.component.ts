import { Component,Input, OnInit } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Album } from 'src/app/models/Album';
import { Song } from 'src/app/models/Song';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.less']
})
export class MusicComponent implements OnInit {
  showModal = false;
  album: Album | undefined;
  playlist!: Playlist;
  @Input() albums!: Album;
  @Input() playlists!: Playlist[];

  constructor(public actionService: ActionManagerService,public playlistService: PlaylistService ) { }

  async ngOnInit() {
    let id = window.location.pathname.split('/').at(2);
    if (window.location.pathname.split('/').at(1)=='library') {
      this.playlist = await this.playlistService.retrieveOnePlaylist(id);
    } else {
      this.album = await this.actionService.retrieveOneAlbum(id);

    }
  }


  addSong(event: MouseEvent) {
    const songId = (event.target as HTMLButtonElement).getAttribute('data-song-id');
    console.log(songId);
    const url = '/~morap01/L250/public/index.php/api/songs/' + songId;
    this.playlistService.AddToPlaylist(this.playlist, url);
    
    alert('La musique a été ajouté dans ' + this.playlist.name);
  }

  delSong(event: MouseEvent) {
    const songId = (event.target as HTMLButtonElement).getAttribute('data-song-id');
    
    this.playlistService.removeSong(this.playlist, songId);
  }
}
