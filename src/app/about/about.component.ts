import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../services/layout/common.service';
import { TimelineViewModel } from '../viewModels/timeline.viewModel';
import { LoadingService } from '../services/layout/loading.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  footerBackgroundColor: string = '#000';
  colorWriter: string = '#fff';
  h1Size: string;
  palavra: number = 0;
  nome: string = ' ';
  titulo: string;
  titulos: string[] = [
    ' Engenheiro de Software',
    ' Programador Web Full Stack',
    ' Analista de Sistemas',
    ' Desenvolvedor C# .NET',
    ' '
  ];
  animating: boolean = true;
  backgroundMobile: string = 'black';
  backgroundMobileContainer: string = 'rgba(0,0,0,0.8)';

  timelines: TimelineViewModel[] = [
    {
      align: 'left',
      description: 'Em 2014 realizei o meu primeiro estágio na First Decision Tecnologias Inovadoras, uma empresa no ramo de BI, onde fiz parte da equipe de desenvolvimento mobile trabalhando com tecnologias web e a plataforma Apache Cordova para construir apps para Android e iOS.',
      image: '../assets/logos/fd-logo.png',
      imageWidth: '180px',
      title: 'Bem-vindo ao Front-end',
      year: '2014'
    },
    {
      align: 'right',
      description: 'Em 2015 ingressei na ATSNET Soluções em TI e fiquei alocado em projetos na Junta Comercial do Estado do Rio de Janeiro, onde melhorei minhas habilidades de front-end e tive contato pela primeira vez com a platatorma .NET e a linguagem de programação C#.',
      image: '../assets/logos/svgs/atsnet-logo.svg',
      imageWidth: '180px',
      title: 'Bem-vindo à linguagem C#',
      year: '2015'
    },
    {
      align: 'left',
      description: 'A Infobase foi uma escola onde aprendi a lidar com a pressão dos prazos de projetos, a entrar em contato com o cliente e a programar Web APIs em C# com a plataforma .NET. Também adquiri mais responsabilidades e experiência em diferentes projetos de diferentes clientes no ramo de seguros.',
      image: '../assets/logos/infobase-logo.png',
      imageWidth: '210px',
      title: 'Nasce um Full Stack',
      year: '2017'
    },
    {
      align: 'right',
      description: 'Na multinacional IBM ganhei experiência como desenvolvedor de aplicações web trabalhando em um projeto no ramo de seguros da multinacional Prudential. Fiz o uso de tecnologias web para construir interfaces de usuário e APIs, além de receber feedback, o que me ajudou a trabalhar para melhorar a minha comunicação interpessoal.',
      image: '../assets/logos/ibm-logo.png',
      imageWidth: '110px',
      title: 'Entrei em uma multinacional',
      year: '2018'
    },
    {
      align: 'left',
      description: 'De volta ao centro do Rio, como um profissional Full Stack com 5 anos de experiência, na Perlink estive alocado em projetos da Oi para fazer a migração tecnológica do seu sistema jurídico, trabalhando em Sprints com releases a cada 2 semanas. Venho adotando tecnologias como os frameworks ANGULAR e ASP .NET Core e o DBMS Oracle, além de HTML5, CSS3 e JavaScript.',
      image: '../assets/logos/perlink-logo.png',
      imageWidth: '180px',
      title: 'De volta ao Centro',
      year: '2019'
    }
  ];


  constructor(public commonService: CommonService, public loading: LoadingService) { }

  ngOnInit() {
    this.loading.show();
    this.commonService.initializePage();
    this.write();
    this.loading.hide();
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    let header = document.getElementById('header');

    if (window.scrollY > 600) {
      header.classList.remove('opacityOff');
      header.classList.add('opacityOn');
    }
    else {
      header.classList.remove('opacityOn');
      header.classList.add('opacityOff');
    }
  }

  write() {
    let i = 0;

    let interval = setInterval(() => {
      this.titulo = this.titulos[this.palavra];
      if (i < this.titulo.length) {
        this.nome += this.titulo[i++];
      }
      else {
        clearInterval(interval);
        setTimeout(() => this.erase(), 2000);
      }

    }, 100);
  }

  erase() {
    let flag = 0;
    let array = this.nome.split('');
    let interval = setInterval(() => {
      if (flag < this.titulo.length) {
        array.pop();
        this.nome = array.join('');
        flag++
      }
      else {
        clearInterval(interval);
        this.palavra = (this.palavra == this.titulos.length - 1) ? 0 : ++this.palavra;
        this.write();
      }
    }, 50);
  }

  


  


  











  scrollInto(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
