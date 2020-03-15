import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/layout/menu.service';

@Component({
  selector: 'article-all-menu',
  templateUrl: './article-all-menu.component.html',
  styleUrls: ['./article-all-menu.component.scss']
})
export class ArticleAllMenuComponent implements OnInit {
  isArticleMenuVisible: boolean;
  @Input() articles : any[];

  constructor(public menuService: MenuService) { }

  ngDoCheck() {
    this.isArticleMenuVisible = this.menuService.isArticleMenuVisible;
    console.log(this.isArticleMenuVisible);
  }

  ngOnInit() {
  }

}
