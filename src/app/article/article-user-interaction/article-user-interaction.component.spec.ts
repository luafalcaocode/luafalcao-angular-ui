import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUserInteractionComponent } from './article-user-interaction.component';

describe('ArticleUserInteractionComponent', () => {
  let component: ArticleUserInteractionComponent;
  let fixture: ComponentFixture<ArticleUserInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleUserInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUserInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
