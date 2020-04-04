import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nice-gallery',
  templateUrl: './nice-gallery.component.html',
  styleUrls: ['./nice-gallery.component.scss']
})
export class NiceGalleryComponent implements OnInit {
  @Input() itens: any[];
  revealed: boolean = false;
  id: string = '';

  constructor() { }

  ngOnInit() {
  }

  onClick_Reveal(id: string) {
    this.revealed = true;
    this.id = id;
  }
}
