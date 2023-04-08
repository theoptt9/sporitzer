import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {
  showModal = false;
  newLibraryName = '';
  libraries: string[] = [];

  ngOnInit() {
    this.libraries = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.includes('library_')) {
        const library = localStorage.getItem(key);
        this.libraries.push(library ?? '');
        // Ajoutez le nom de la playlist au localStorage sous la forme d'un tableau de chaînes de caractères
        const playlistsString = localStorage.getItem(library ?? '') ?? '[]';
        const playlists = JSON.parse(playlistsString) as string[];
        localStorage.setItem(library ?? '', JSON.stringify(playlists));
      }
    }
  }
  createLibrary() {
    // Vérifiez que le nom de la bibliothèque est valide
    if (this.newLibraryName.trim() === '') {
      alert('Veuillez entrer un nom de bibliothèque valide.');
      return;
    }

    // Récupérez les bibliothèques existantes depuis le LocalStorage
    const libraries = JSON.parse(localStorage.getItem('libraries') || '[]');

    // Ajoutez la nouvelle bibliothèque à la liste
    libraries.push(this.newLibraryName);

    // Stockez la liste mise à jour dans le LocalStorage
    localStorage.setItem('libraries', JSON.stringify(libraries));

    // Réinitialisez le champ de texte et masquez la modal
    this.newLibraryName = '';
    this.showModal = false;

    this.libraries.push(this.newLibraryName);
  }
}
