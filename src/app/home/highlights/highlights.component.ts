import { Component, OnInit } from '@angular/core';
import { SlideViewModel } from '../../viewModels/slide.viewModel';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  public slides: SlideViewModel[];
  public slideSelectedContent: SlideViewModel;
  public assets_path: string = '../../assets/backgrounds/';
  public slideInterval: any;

  constructor() {
    this.slides = [
      new SlideViewModel(`Design Patterns #5: Abstract Factory`, `Neste artigo, mostro como você pode usar o Abstract Factory para oferecer portabilidade à sua aplicação.`, `highlight_1.png`, 0),
      new SlideViewModel(`Crazy & Mad Girls`, 'Confira o jogo eletrônico que desenvolvi para PC com a ferramenta Blitz 3D ', 'gradient.jpg', 1),
      new SlideViewModel(`Usando o GIT via linha de comando`, 'Neste tutorial, mostro como executar os comandos básicos do GIT via linha de comando.', 'moria.png', 2)
    ];


    this.slides[0].isActive = true;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.autoplaySlide();
  }

  changeSlideByClicking(id: number) {
    clearInterval(this.slideInterval);
    this.slides.map(slide => slide.isActive = false);
    let slide = this.slides.filter(slide => slide.id == id)[0];
    slide.isActive = true;
  }

  changeSlide(id: number) {
    this.slides.map(slide => slide.isActive = false);
    let slide = this.slides.filter(slide => slide.id == id)[0];
    slide.isActive = true;
  }

  autoplaySlide() {
    let atual: number = 1;
    this.slideInterval = setInterval(() => {
      this.changeSlide(atual);
      atual++;
      if (atual == this.slides.length) {
        atual = 0;
      }
    }, 5000);
  }

  stopAutoPlay() {
    clearInterval(this.slideInterval);
  }
}
