import { Component, OnInit } from '@angular/core';

import { ImageViewModel } from '../viewModels/image.viewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public images: ImageViewModel[];

  constructor() {

    this.images = [
      {
        id: 1,
        src: '../../../assets/logos/ibm-logo.png',
        link: 'https://www.ibm.com',
        specialClass: 'small-image'

      },
      {
        id: 2,
        src: '../../../assets/logos/jucerja-logo.png',
        link: 'https://www.jucerja.rj.gov.br',
        specialClass: ''
      },
      {
        id: 3,
        src: '../../../assets/logos/svgs/atsnet-logo.svg',
        link: 'http://www.atsnetsolucoes.com',
        specialClass: ''
      },
      {
        id: 4,
        src: '../../../assets/logos/braslight-logo.png',
        link: 'https://www.braslight.com.br/v2/',
        specialClass: ''
      },
      {
        id: 5,
        src: '../../../assets/logos/prudential-logo.png',
        link: 'https://www.prudentialdobrasil.com.br/',
        specialClass: ''
      },
      {
        id: 6,
        src: '../../../assets/logos/eletros-logo.png',
        link: 'https://www.eletros.com.br',
        specialClass: 'medium-image'
      },
      {
        id: 7,
        src: '../../../assets/logos/capemisa-logo.png',
        link: 'http://www.capemisa.com.br',
        specialClass: ''
      },
      {
        id: 8,
        src: '../../../assets/logos/infobase-logo.png',
        link: 'http://infobase.com.br',
        specialClass: 'medium-image infobase-logo'
      },
      {
        id: 9,
        src: '../../../assets/logos/fd-logo.png',
        link: 'http://www.firstdecision.com.br/',
        specialClass: 'first-logo'
      },
      {
        id: 10,
        src: '../../../assets/logos/perlink-logo.png',
        link: 'http://www.perlink.com.br/',
        specialClass: 'perlink-logo'
      }
    ]
  }

  ngOnInit() {
  }

}
