import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistApiComponent } from './playlist-api.component';

describe('PlaylistApiComponent', () => {
  let component: PlaylistApiComponent;
  let fixture: ComponentFixture<PlaylistApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
