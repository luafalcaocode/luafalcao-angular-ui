import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nice-gallery',
  templateUrl: './nice-gallery.component.html',
  styleUrls: ['./nice-gallery.component.scss']
})
export class NiceGalleryComponent implements OnInit {
  revealed: boolean;
  id: string = '';
  @Input() itens: any[];
  @Output() active: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  onClick_Reveal(id: string) {
    this.revealed = true;
    this.id = id;
    this.active.emit(this);
  }

  ngOnDestroy() {
    this.revealed = false;
  }
}
