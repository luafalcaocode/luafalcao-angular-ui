import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkPlaceComponent } from './dark-place.component';

describe('DarkPlaceComponent', () => {
  let component: DarkPlaceComponent;
  let fixture: ComponentFixture<DarkPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
