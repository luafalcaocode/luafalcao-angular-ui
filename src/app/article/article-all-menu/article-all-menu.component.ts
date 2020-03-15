import { Component, OnInit, Output, DoCheck, Input, EventEmitter } from '@angular/core';
import { MenuService } from '../../services/layout/menu.service';

@Component({
  selector: 'article-all-menu',
  templateUrl: './article-all-menu.component.html',
  styleUrls: ['./article-all-menu.component.scss']
})
export class ArticleAllMenuComponent implements DoCheck {
  isArticleMenuVisible: boolean;
  @Input() articles : any[];
  @Output() getById = new EventEmitter();

  constructor(public menuService: MenuService) { }

  ngDoCheck() {
    this.isArticleMenuVisible = this.menuService.isArticleMenuVisible;
  }

  onClick(id: number) {
    this.getById.emit(id);
  }
}
