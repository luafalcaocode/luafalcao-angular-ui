import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
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
  loading: any;

  timelines: TimelineViewModel[] = [
    {
      align: 'left',
      description: 'Em 2014 realizei o meu primeiro estágio na First Decision Tecnologias Inovadoras, uma empresa no ramo de BI, onde fiz parte da equipe de desenvolvimento mobile trabalhando com tecnologias web e a plataforma Apache Cordova para construir apps e protótipos para Android e iOS. Realizei trabalhos para órgãos como PROCON e PRODERJ.',
      image: '../assets/logos/fd-logo.png',
      imageWidth: '180px',
      title: 'Bem-vindo ao Front-end',
      year: '2014'
    },
    {
      align: 'right',
      description: 'Em 2015 ingressei na ATSNET Soluções em TI e fiquei alocado em projetos na Junta Comercial do Estado do Rio de Janeiro, onde melhorei minhas habilidades de front-end e tive contato pela primeira vez com a platatorma .NET e a linguagem de programação C#. Desenvolvi interfaces de usuário do Novo Portal Web da JUCERJA.',
      image: '../assets/logos/svgs/atsnet-logo.svg',
      imageWidth: '180px',
      title: 'Bem-vindo à linguagem C#',
      year: '2015'
    },
    {
      align: 'left',
      description: 'A Infobase foi uma escola onde aprendi a lidar com a pressão dos prazos de projetos, a entrar em contato com o cliente e a programar Web APIs em C# com a plataforma .NET. Ajudei a entregar soluções de software para clientes como Braslight, Capemisa e Eletros escritas em Angular JS e C# .NET',
      image: '../assets/logos/infobase-logo.png',
      imageWidth: '210px',
      title: 'Nasce um Full Stack',
      year: '2017'
    },
    {
      align: 'right',
      description: 'Na IBM adquiri experiência fazendo parte de uma empresa de escala global com pessoas oriundas de diferentes países. Fiz parte do time de desenvolvimento da área Global Business Services programando interfaces de usuário e Web APIs para um software no ramo de seguros da multinacional Prudential do Brasil.',
      image: '../assets/logos/ibm-logo.png',
      imageWidth: '110px',
      title: 'Entrei em uma multinacional',
      year: '2018'
    },
    {
      align: 'left',
      description: 'Na Perlink venho trabalhando com o desenvolvimento de aplicações web construídas com Angular 8, ASP .NET Core, Oracle e GIT e estive alocado em projetos do cliente Oi para fazer a migração de seu Sistema Jurídico para uma tecnologia mais moderna. Também recebi treinamentos sobre cultura ágil e SCRUM passando a ajudar o time na realização de plannings, dailys, reviews e retrospectivas.',
      image: '../assets/logos/perlink-logo.png',
      imageWidth: '180px',
      title: 'Full Stack e Agile',
      year: '2020'
    }
  ];
  


  constructor(public commonService: CommonService, public loadingService: LoadingService, public elementRef: ElementRef) { }

  ngOnInit() {
    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.commonService.initializePage();
    this.write();
  }

  ngAfterViewInit() {
    this.loadingService.hide(this.loading);
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
