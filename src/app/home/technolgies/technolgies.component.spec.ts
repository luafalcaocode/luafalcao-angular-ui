import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnolgiesComponent } from './technolgies.component';

describe('TechnolgiesComponent', () => {
  let component: TechnolgiesComponent;
  let fixture: ComponentFixture<TechnolgiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnolgiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnolgiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
