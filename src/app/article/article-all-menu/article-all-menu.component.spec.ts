import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAllMenuComponent } from './article-all-menu.component';

describe('ArticleAllMenuComponent', () => {
  let component: ArticleAllMenuComponent;
  let fixture: ComponentFixture<ArticleAllMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAllMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAllMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
