import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../services/layout/common.service';
import { TimelineViewModel } from '../viewModels/timeline.viewModel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  palavra: number = 0;
  nome: string = ' ';
  titulo: string;
  titulos: string[] = [
    ' Engenheiro de Software',
    ' Programador Web Full Stack',
    ' Analista de Sistemas'
  ];
  animating: boolean = true;

  timelines: TimelineViewModel[] = [
    {
      align: 'left',
      description: 'Em 2014 realizei o meu primeiro estágio na First Decision Tecnologias Inovadoras, uma empresa no ramo de BI, onde fiz parte da equipe de desenvolvimento mobile trabalhando com tecnologias web.',
      image: '../assets/logos/fd-logo.png',
      title: 'Bem-vindo ao Front-end',
      year: '2014'
    },
    {
      align: 'right',
      description: 'Em 2015 ingressei na ATSNET Soluções em TI onde melhorei minhas habilidades de front-end e tive contato pela primeira vez com a platatorma .NET e a linguagem de programação C#.',
      image: '../assets/logos/svgs/atsnet-logo.svg',
      title: 'Bem-vindo à linguagem C#',
      year: '2015'
    },
    {
      align: 'left',
      description: 'A Infobase foi uma escola onde aprendi a lidar com o caos e a pressão que existe nas consultorias de TI. Aqui comecei a programar Web APIs em C# com a plataforma .NET e adquiri mais responsabilidades, como entrar em contato diretamente com o cliente e ser responsável pelas entregas de projetos e por ajudar o time com a  parte técnica, ralizando treinamentos, configurando o ambiente de desenvolvimento e lidar com novas tecnologias',
      image: '../assets/logos/infobase-logo.png',
      title: 'Bem-vindo ao Caos',
      year: '2017'
    },
    {
      align: 'right',
      description: 'Na multinacional IBM ganhei experiência como desenvolvedor de aplicações trabalhando em um projeto no ramo de seguros bastante burocrático que foi desafiador para mim. Trabalhei com tecnologias web para construir UI e Web APIs para o cliente Prudential.',
      image: '../assets/logos/atsnet-logo.svg',
      title: 'Entrei na IBM',
      year: '2018'
    }
  ];


  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.initializePage();
    this.write();
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    let header = document.getElementById('header');
    console.log(window.scrollY);
    if (window.scrollY > 649 && window.scrollY < 711) {
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
        flag++;
      }
      else {
        clearInterval(interval);
        this.palavra = (this.palavra == this.titulos.length - 1) ? 0 : ++this.palavra;
        this.write();
      }
    }, 50)
  }

  scrollInto(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
