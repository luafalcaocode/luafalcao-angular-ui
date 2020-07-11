import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear;
  email: string;
  telefone: string;
  link: any;
  @Input() backgroundColor: string;
  constructor() {
    this.email = 'lpjfalcao@gmail.com';
    this.telefone = '+55 (21) 99023-8300'
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.link =  {
      servicos: [
        {
           description: 'Para a sua empresa',
           url: '/servicos/para-sua-empresa'
        },
        {
          description: 'Para a comunidade',
          url: '/servicos/para-a-comunidade'
        }
      ],
      sobre: [
        {
          description: 'Sobre',
          url: '/sobre'
        }
      ]
    }
  }

  showWhatsAppInfo() {

  }

  openUrl(url) {
    window.open(url);
  }

}
