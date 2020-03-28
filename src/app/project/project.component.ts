import { Component, OnInit } from '@angular/core';
import { CardViewModel } from '../viewModels/card.viewModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  cards: CardViewModel[];

  constructor() { }

  ngOnInit() {
    this.cards = [
      {
        title : 'My card',
        description: 'This is just a card to show my work',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title : 'My card 2',
        description: 'This is just a card to show my work',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title : 'My card 2',
        description: 'This is just a card to show my work',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        title : 'My card 2',
        description: 'This is just a card to show my work',
        category: 'Web App',
        link: 'some link here',
        techs: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
      }
    ]
  }

}
