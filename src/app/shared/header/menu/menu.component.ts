import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuViewModel } from 'src/app/viewModels/menu.viewModel';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu: MenuViewModel[];
  @Input() id: string;
  title: string;
  
  @Output() selectItem : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setTitle();
  }

  setTitle() {
    switch(this.id) {
      case 'menuProjetos': 
        this.title = 'Meus Projetos';
      break;
      case 'menuServicos':
        this.title = 'O que você procura?';
      break;
      case 'menuBlogs': 
        this.title = 'Todos os blogs'
      break;
    }
  }

  onClick() {
    this.selectItem.emit(this.id);
  }
}
