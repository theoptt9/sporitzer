import { Component, OnInit } from '@angular/core';

interface Song {
  title: string;
  artist: string;
}

interface Playlist {
  name: string;
  songs: Song[];
}

interface Library {
  name: string;
  playlists: Playlist[];
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
  showModal = false;
  newLibraryName = '';
  libraries: Library[] = [];

  ngOnInit() {
    this.newLibraryName = '';
    this.libraries = [];
    const librariesString = localStorage.getItem('libraries') ?? '[]';
    const libraries = JSON.parse(librariesString) as Library[];

    for (const library of libraries) {
      const playlistsString = localStorage.getItem(`library_${library.name}`) ?? '[]';
      const playlists = JSON.parse(playlistsString) as Playlist[];
      this.libraries.push({ name: library.name, playlists });
    }
  }

  createLibrary() {
    // Vérifiez que le nom de la bibliothèque est valide
    if (this.newLibraryName.trim() === '') {
      alert('Veuillez entrer un nom de bibliothèque valide.');
      return;
    }

    // Récupérez les bibliothèques existantes depuis le LocalStorage
    const librariesString = localStorage.getItem('libraries') ?? '[]';
    const libraries = JSON.parse(librariesString) as Library[];

    // Ajoutez la nouvelle bibliothèque à la liste
    libraries.push({ name: this.newLibraryName, playlists: [] });

    // Stockez la liste mise à jour dans le LocalStorage
    localStorage.setItem('libraries', JSON.stringify(libraries));

    // Réinitialisez le champ de texte et masquez la modal
    this.newLibraryName = '';
    this.showModal = false;

    const newLibrary: Library = { name: this.newLibraryName, playlists: [] };
    this.libraries.push(newLibrary);
  }

  createPlaylist(library: Library) {
    const playlistName = prompt('Veuillez entrer un nom de playlist');
    if (playlistName?.trim() === '') {
      alert('Veuillez entrer un nom de playlist valide.');
      return;
    }

    const playlist: Playlist = { name: playlistName ?? '', songs: [] };
    library.playlists.push(playlist);

    localStorage.setItem(`library_${library.name}`, JSON.stringify(library.playlists));
  }

  addSongToPlaylist(playlist: Playlist, song: Song) {
    playlist.songs.push(song);

    localStorage.setItem(`playlist_${playlist.name}`, JSON.stringify(playlist));
  }
}
