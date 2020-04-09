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
    let container =  document.getElementById('searchFieldContainer');
    container.classList.remove('fadeIn');
    container.classList.add('fadeOut');

    // document.getElementsByTagName('body')[0].style.overflowY = 'auto'; 
  }

  saveSearch(value: string) {
    this.searchField = value;
  }
}
