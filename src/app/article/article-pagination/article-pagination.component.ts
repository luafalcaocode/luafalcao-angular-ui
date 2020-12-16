import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { ArticleViewModel } from '../../viewModels/article.viewModel';


@Component({
  selector: 'article-pagination',
  templateUrl: './article-pagination.component.html',
  styleUrls: ['./article-pagination.component.scss']
})
export class ArticlePaginationComponent implements OnInit {
  @Input() count: number;
  @Output() paginar: EventEmitter<any> = new EventEmitter<any>();
  @Output() paginaInvalida: EventEmitter<any> = new EventEmitter<any>();

  allPageNumbers: number[] = [];
  paginationNumbersRendered: any[] = [];
  totalOfPagesAvailable: number;

  leftArrowVisible: boolean;
  rightArrowVisible: boolean;
  pageName: string;
  pageNumber: string;

  constructor(public articleService: ArticleService, public elementRef: ElementRef, public activatedRouter: ActivatedRoute) { }

  ngOnChanges() {
    this.totalOfPagesAvailable = this.getTotalOfPageAvailable();
    if (this.totalOfPagesAvailable >= 0) {
      this.getNumbersOfArticlesPerPage();
      this.activatedRouter.params.subscribe(params => {
        if (params.pagina) {
          this.pageName = params.nome;
          this.pageNumber = params.pagina;
          this.setCurrentPagination(parseInt(params.pagina));
          this.paginationNumbersRendered.forEach(item => {
            if (params.pagina == item.page) {
              item.active = true;
            }
          });
        }
        else {
          this.setCurrentPageActiveStyle(1);
        }

        this.paginar.emit({ page: params.pagina, tag: this.pageName });

      });
    }
  }

  ngOnInit() {

  }

  getTotalOfPageAvailable() {
    let numberOfPages = this.count / 6;
    let rest = this.count % 6;
    this.totalOfPagesAvailable = (rest > 0) ? rest : numberOfPages;

    return this.totalOfPagesAvailable;
  }

  whenClickPageNumber(id) {
    const page = id.split('_')[1]
    this.setCurrentPageActiveStyle(page);
    this.paginar.emit({ page: page, tag: this.pageName });
  }

  whenClickNextPage() {
    const lastPageNumberVisibleOnPage = this.paginationNumbersRendered[this.paginationNumbersRendered.length - 1].page;
    if (lastPageNumberVisibleOnPage < this.totalOfPagesAvailable) {
      const nextPageNumbersToShowOnPage = parseInt(lastPageNumberVisibleOnPage) + 1;
      this.paginationNumbersRendered.shift();
      this.paginationNumbersRendered.push({ page: nextPageNumbersToShowOnPage, active: true });
      this.paginar.emit({ page: this.paginationNumbersRendered[this.paginationNumbersRendered.length - 1].page, tag: this.pageName });
      this.setnextPageActiveStyle();
      this.showOrHideArrows();
    }
  }

  whenClickPreviousPage() {
    const firstPageNumberVisibleOnPage = this.paginationNumbersRendered[0].page;
    if (firstPageNumberVisibleOnPage > 1) {
      const previousPageNumbersToShowOnPage = firstPageNumberVisibleOnPage - 1;
      this.paginationNumbersRendered.pop();
      this.paginationNumbersRendered.unshift({ page: previousPageNumbersToShowOnPage, active: true });
      this.paginar.emit({ page: this.paginationNumbersRendered[0].page, tag: this.pageName });
      this.setpreviousPagePageActiveStyle();
      this.showOrHideArrows();
    }
  }

  setCurrentPagination(pageSelectedByUser) {
    let previousPage: any = parseInt(pageSelectedByUser) - 1;
    let nextPage: any = parseInt(pageSelectedByUser) + 1;

    this.paginationNumbersRendered = [];

    this.rightArrowVisible = true;
    this.leftArrowVisible = true;

    if (this.count > 6) {
      if (pageSelectedByUser == 1) {
        ++previousPage;
        this.paginationNumbersRendered.push({ page: previousPage, active: false });
        this.paginationNumbersRendered.push({ page: pageSelectedByUser + 1, active: false });
        this.paginationNumbersRendered.push({ page: nextPage + 1, active: false });
      }
      else if (pageSelectedByUser == this.totalOfPagesAvailable) {
        this.paginationNumbersRendered.push({ page: previousPage - 1, active: false });
        this.paginationNumbersRendered.push({ page: nextPage - 2, active: false });
        this.paginationNumbersRendered.push({ page: pageSelectedByUser, active: false });
      }
      else if (pageSelectedByUser > this.totalOfPagesAvailable || pageSelectedByUser <= 0) {
        this.paginaInvalida.emit({ title: 'Conteúdo não encontrado ', description: 'A página que você procura não está cadastrado no sistema ou ainda não existe.' });
      }
      else {
        this.paginationNumbersRendered.push({ page: previousPage, active: false });
        this.paginationNumbersRendered.push({ page: pageSelectedByUser, active: true });
        this.paginationNumbersRendered.push({ page: nextPage, active: false });
      }
    }
    else {
      this.paginationNumbersRendered.push({ page: pageSelectedByUser, active: true });
    }



    this.setCurrentPageActiveStyle(pageSelectedByUser);

    this.paginationNumbersRendered = this.paginationNumbersRendered.sort((a, b) => {
      if (a.page > b.page)
        return 1;
      else if (a.page < b.page)
        return -1;
      else
        return 0;
    });

    this.showOrHideArrows();
  }

  showOrHideArrows() {
    if (this.paginationNumbersRendered != null) {
      if (this.paginationNumbersRendered[0].page == 1) {
        this.leftArrowVisible = false;
      }
      else {
        this.leftArrowVisible = true;
      }

      if (this.paginationNumbersRendered[this.paginationNumbersRendered.length - 1].page == this.totalOfPagesAvailable || this.count < 7) {
        this.rightArrowVisible = false;
      }
      else {
        this.rightArrowVisible = true;
      }
    }
  }

  getNumbersOfArticlesPerPage() {
    for (let index = 1; index <= this.totalOfPagesAvailable; index++)
      this.allPageNumbers.push(index);

    Array
      .from(this.allPageNumbers)
      .forEach((item, index) => {
        if (index < 4)
          this.paginationNumbersRendered.push({ page: item, active: false });
      });
  }


  setCurrentPageActiveStyle(id) {
    this.paginationNumbersRendered.forEach(item => {
      if (item.page == id) {
        item.active = true;
      }
      else {
        item.active = false;
      }
    })
  }

  setnextPageActiveStyle() {
    this.paginationNumbersRendered.forEach(item => {
      item.active = false;
    });

    this.paginationNumbersRendered[this.paginationNumbersRendered.length - 1].active = true;
  }

  setpreviousPagePageActiveStyle() {
    this.paginationNumbersRendered.forEach(item => {
      item.active = false;
    });

    this.paginationNumbersRendered[0].active = true;
  }
}
