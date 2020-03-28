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
  
  @Output() selectItem : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selectItem.emit(this.id);
  }
}
