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
  public assets_path: string = 'assets/backgrounds/';
  public slideInterval: any;

  constructor() {
    this.slides = [
      new SlideViewModel(`Tutorial: criando componentes com o Angular 8`, 'Neste tutorial iremos aprender como criar componentes reutilizáveis com o framework Angular', '/banner/banner_2.png', 0, '400px -60px'),
      new SlideViewModel(`Padrões de Projeto e onde habitam`, `Por que os padrões de projetos são importantes? Como utilizá-los em uma aplicação?`, `/banner/banner_1.png`, 1, ''),
      new SlideViewModel(`Podcast #3: Engenharia de Software`, 'Nesse podcast falamos sobre uma abordagem prática profissional adotada nos últimos anos para construir sistemas de computador', '/banner/banner_3.jpg', 2, '0 -100px')
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
    }, 3000);
  }

  stopAutoPlay() {
    clearInterval(this.slideInterval);
  }
}
