import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dark-place',
  templateUrl: './dark-place.component.html',
  styleUrls: ['./dark-place.component.scss']
})
export class DarkPlaceComponent implements OnInit {

  private modelForm = new Object();
  @Output() message: EventEmitter<any> = new EventEmitter<any>(); 


  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.message.emit(this.modelForm);
  }

}
