import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AlbumCardComponent } from './component/album-card/album-card.component';
import { PlaylistCardComponent } from './component/playlist-card/playlist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlbumCardComponent,
    PlaylistCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
