import { Component, OnInit, Input } from '@angular/core';
import { CardViewModel } from '../../viewModels/card.viewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public card: CardViewModel;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigate(url: string) {
    window.open(url);
  }
}
