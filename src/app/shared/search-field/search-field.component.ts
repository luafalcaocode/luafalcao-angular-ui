import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  public isContainerIsVisible: boolean = false;
  public searchField: string = '';

  constructor() { }

  ngOnInit() {
    
  }

  closeContainer() {
    document.getElementById('searchFieldContainer').style.display = 'none';
    this.searchField = '';
  }
}
