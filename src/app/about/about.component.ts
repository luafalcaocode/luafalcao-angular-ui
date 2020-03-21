import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.escrever();
  }

  escrever() {
    let i = 0;
    
    let interval = setInterval(() => {
      this.titulo = this.titulos[this.palavra];
      if (i < this.titulo.length) {
        this.nome += this.titulo[i++];
      }
      else {
        clearInterval(interval);
        setTimeout(() => this.apagar(), 2000);
      }    

    }, 100);
  }

  apagar() {
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
        this.escrever();
      }
    }, 50)
  }
}
