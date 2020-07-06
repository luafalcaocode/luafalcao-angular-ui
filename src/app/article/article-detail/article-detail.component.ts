import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoaderService } from '../../services/layout/loader.service';
import { CommonService } from '../../services/layout/common.service';
import { MenuService } from '../../services/layout/menu.service';


@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  allArticles: any[];
  comments: any[];
  isLoading: boolean;
  id: number;

  constructor(public loaderService: LoaderService, public commonService: CommonService, public menuService: MenuService, public router: ActivatedRoute) {}

  ngOnInit() {
    this.commonService.initializePage();
    // fazer um GET na API por ID (que vem da URL) para pegar o ID do artigo
    this.router.params.subscribe(params => this.id = params.id);
    console.log(this.id);
    this.commonService.hideLoading();
  }
}
