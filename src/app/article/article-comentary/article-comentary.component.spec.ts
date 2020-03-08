import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComentaryComponent } from './article-comentary.component';

describe('ArticleComentaryComponent', () => {
  let component: ArticleComentaryComponent;
  let fixture: ComponentFixture<ArticleComentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
