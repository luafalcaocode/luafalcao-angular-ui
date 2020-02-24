import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'article-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  openContainer() {
    let container = document.getElementById('searchFieldContainer');
    container.classList.remove('fadeOut');
    container.classList.add('fadeIn');

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  ngOnInit() {
    
  }

}
