import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ModalService } from '../../services/layout/modal.service';
import { MenuService } from '../../services/layout/menu.service';

@Component({
  selector: 'article-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
              public loginService: LoginService, 
              public modalService: ModalService,
              public menuService: MenuService) { }


  openContainer() {
    let container = document.getElementById('searchFieldContainer');
    container.classList.remove('fadeOut');
    container.classList.add('fadeIn');

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  ngOnInit() {
    
  }
}
