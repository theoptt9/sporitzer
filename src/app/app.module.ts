import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AlbumCardComponent } from './component/album-card/album-card.component';
import { PlaylistCardComponent } from './component/playlist-card/playlist-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LibraryComponent } from './pages/library/library.component';
import { FormsModule } from '@angular/forms';
import { MusicComponent } from './component/music/music.component';
import { PlaylistApiComponent } from './component/playlist-api/playlist-api.component';
import { ArtistsApiComponent } from './component/artists-api/artists-api.component';
import { LibraryDetailComponent } from './pages/library-detail/library-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlbumCardComponent,
    PlaylistCardComponent,
    HomeComponent,
    SearchComponent,
    LibraryComponent,
    MusicComponent,
    PlaylistApiComponent,
    ArtistsApiComponent,
    LibraryDetailComponent,
    AlbumDetailComponent,
    ArtistDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
