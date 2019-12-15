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

  constructor() {
    this.slides = [
      new SlideViewModel(`Design Patterns #6: Abstract Factory`, `Caindo na categoria de Padrões Criacionais o poderoso Abstract Factory é uma ferramenta muito útil para ajudar  na portabilidade.`, `highlight_1.png`, 0),
      new SlideViewModel(`Slide 2`, 'Conteúdo do Slide 2', 'highlight_2.png', 1),
      new SlideViewModel(`Slide 3`, 'Conteúdo do Slide 3', 'highlight_3.png', 2)
    ];


    this.slideSelectedContent = this.slides[0];
  }

  ngOnInit() {
  }

  changeSlide(id: number) {
    let slide = this.slides.filter(slide => slide.id == id)[0];
    this.slideSelectedContent = slide;
    this.toggleActiveSlideClass(id.toString());
  }

  autoplaySlide() {
    let atual: number = 1;
    let interval = setInterval(() => {
      this.changeSlide(atual);
      atual++;
      if (atual == this.slides.length) {
        clearInterval(interval);
      }
    }, 5000);
  }

  toggleActiveSlideClass(id: string) {
    let slides = document.getElementsByClassName('slide-navigation-action');
    slides[0].classList.remove('active-slide-navigation');
    slides[1].classList.remove('active-slide-navigation');
    slides[2].classList.remove('active-slide-navigation');

    let navigation = document.getElementById(id);
    if (navigation != undefined) {
      document.getElementById(id).classList.add('active-slide-navigation');
    }
  }
}
