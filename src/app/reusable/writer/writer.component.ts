import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {
  @Input() color;
  @Input() fontSize;
  @Input() align;
  @Input() strongness;
  @Input() titulos: string[] = [];

  palavra: number = 0;
  nome: string = ' ';
  titulo: string;
  

  constructor() { }

  ngOnInit() {
    // this.color = 'white';
    // this.fontSize = '32px';
    // this.align = 'center';
    // this.strongness = 'normal';
    // this.titulos = ['Change Detection Test'];
    this.write();
  }

  ngOnChanges() {

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
        setTimeout(() => this.erase(), 1500);
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
}
