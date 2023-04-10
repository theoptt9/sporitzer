import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LibraryComponent } from './pages/library/library.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { LibraryDetailComponent } from './pages/library-detail/library-detail.component';
import { PlaylistApiComponent } from './component/playlist-api/playlist-api.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'album/:title', component: AlbumDetailComponent },
  { path: 'library/:id', component: LibraryDetailComponent },
  { path: 'library/:id', component: PlaylistApiComponent },
  { path: 'artist/:title', component: ArtistDetailComponent },
  {path: "**", redirectTo : "/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
