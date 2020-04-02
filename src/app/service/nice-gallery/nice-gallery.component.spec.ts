import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceGalleryComponent } from './nice-gallery.component';

describe('NiceGalleryComponent', () => {
  let component: NiceGalleryComponent;
  let fixture: ComponentFixture<NiceGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
