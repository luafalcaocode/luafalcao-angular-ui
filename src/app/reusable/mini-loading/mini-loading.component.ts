import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mini-loading',
  templateUrl: './mini-loading.component.html',
  styleUrls: ['./mini-loading.component.scss']
})
export class MiniLoadingComponent implements OnInit {
  @Output() onLoading: EventEmitter<any> = new EventEmitter(); 
  @Input() isLoading: any;

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }  

  onClick() {
    this.onLoading.emit(true);
    this.isLoading = true;
  }
}
