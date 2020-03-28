import { Component, OnInit, Input } from '@angular/core';
import { CardViewModel } from '../../viewModels/card.viewModel';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public card: CardViewModel;

  constructor() { }

  ngOnInit() {
  }

}
