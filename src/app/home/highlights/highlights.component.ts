import { Component, OnInit } from '@angular/core';
import { SlideViewModel } from '../../viewModels/slide.viewModel';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  private slides: SlideViewModel[];
  private slideSelectedContent: SlideViewModel;
  private assets_path: string = '../../assets/backgrounds/';
  private slideInterval: any;

  constructor() {
    this.slides = [
      new SlideViewModel(`Design Patterns #6: Abstract Factory`, `Caindo na categoria de Padrões Criacionais o poderoso Abstract Factory é uma ferramenta muito útil para ajudar  na portabilidade.`, `highlight_1.png`, 0),
      new SlideViewModel(`Slide 2`, 'Conteúdo do Slide 2', 'highlight_2.png', 1),
      new SlideViewModel(`Slide 3`, 'Conteúdo do Slide 3', 'highlight_3.png', 2)
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
    }, 1000);
  }

  stopAutoPlay() {
    clearInterval(this.slideInterval);
  }
}
