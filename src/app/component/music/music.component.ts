import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActionManagerService } from 'src/app/services/action-manager.service';
import { Album } from 'src/app/models/Album';
import { Song } from 'src/app/models/Song';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import { DomSanitizer } from '@angular/platform-browser';

declare global {
  interface Window {
    YT: { PlayerState: any };
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.less']
})
export class MusicComponent implements OnInit {

  @ViewChild('video') videoPlayer !: ElementRef;

  showModal = false;
  album: Album | undefined;
  playlist!: Playlist;
  @Input() albums!: Album;
  @Input() playlists!: Playlist[];
  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef;
  activeSongId?: number;

  player: any;

  constructor(public sanitizer: DomSanitizer, public actionService: ActionManagerService, public playlistService: PlaylistService) { }

  async ngOnInit() {
    let id = window.location.pathname.split('/').at(-1);
    if (window.location.pathname.split('/').at(1) == 'library') {
      this.playlist = await this.playlistService.retrieveOnePlaylist(id);
    } else {
      this.album = await this.actionService.retrieveOneAlbum(id);
    }
  }


  //#region youtube api

  ngAfterViewInit() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
    window.onYouTubeIframeAPIReady = () => {
      this.player = new (<any>window).YT.Player('player', {
        height: this.videoPlayer.nativeElement.getBoundingClientRect().height,
        width: this.videoPlayer.nativeElement.getBoundingClientRect().width,
        playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0 },
        videoId: null,
      });
    }
  }

  //#endregion

  addSong(event: MouseEvent) {
    const songId = (event.target as HTMLButtonElement).getAttribute('data-song-id');

    const url = '/~morap01/L250/public/index.php/api/songs/' + songId;
    this.playlistService.AddToPlaylist(this.playlist, url);

    alert('La musique a été ajouté dans ' + this.playlist.name);
  }

  delSong(event: MouseEvent) {
    const songId = (event.target as HTMLButtonElement).getAttribute('data-song-id');

    this.playlistService.removeSong(this.playlist, songId);
  }

  showContent(clickedSongId: number) {
    const song = (this.album || this.playlist)?.songs.find(({ id }) => id === clickedSongId)
    if (!song) return

    if (this.activeSongId === song.id) {
      this.player?.stopVideo?.()
      this.activeSongId = undefined
    } else {
      this.player?.loadVideoByUrl?.(song.youtube)
      this.activeSongId = song.id
    }
  }
}
