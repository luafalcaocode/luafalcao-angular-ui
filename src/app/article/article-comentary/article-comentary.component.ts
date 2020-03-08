import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-comentary',
  templateUrl: './article-comentary.component.html',
  styleUrls: ['./article-comentary.component.scss']
})
export class ArticleComentaryComponent implements OnInit {
  modelForm: any;
  numberOfComments: number;
  comments: any[];

  constructor() { }

  ngOnInit() {
    this.modelForm = new Object();
    this.comments = [
      {
        name: 'Ellen Galven',
        content: 'Hi! I loved your article! Congratulations!'
      },
      {
        name: 'Cloud Strife',
        content: 'Muito bom! Parabéns pelo artigo! Adorei a leitura!'
      },
      {
        name: 'Princesa Zelda',
        content: 'Oi! Você viu o Link por aí? Ele esqueceu a Ocarina do Tempo comigo!'
      }
    ];
  }
}
