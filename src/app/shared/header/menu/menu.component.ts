import { Component, OnInit, Input } from '@angular/core';
import { MenuViewModel } from 'src/app/viewModels/menu.viewModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu: MenuViewModel[];
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }
}
