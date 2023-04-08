import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.less']
})
export class LibraryDetailComponent implements OnInit {
  newSong: string;

  constructor(private route: ActivatedRoute) {
    this.newSong = "";
  }

  ngOnInit(): void {
  }

  addSong() {
  }
}
