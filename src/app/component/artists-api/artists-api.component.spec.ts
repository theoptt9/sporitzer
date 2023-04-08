import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsApiComponent } from './artists-api.component';

describe('ArtistsApiComponent', () => {
  let component: ArtistsApiComponent;
  let fixture: ComponentFixture<ArtistsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
