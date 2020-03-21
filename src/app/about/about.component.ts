import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../services/layout/common.service';

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
