import { Component, OnInit } from '@angular/core';

import { MobileMenuService } from '../../services/layout/mobile-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  constructor(private mobileMenuService: MobileMenuService) {
    
  }

  ngOnInit() {
  }

  
}
