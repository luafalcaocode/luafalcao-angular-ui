import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dark-place',
  templateUrl: './dark-place.component.html',
  styleUrls: ['./dark-place.component.scss']
})
export class DarkPlaceComponent implements OnInit {

  public modelForm = {
    name: '',
    email: '',
    message: ''
  };
  
  @Output() message: EventEmitter<any> = new EventEmitter<any>(); 


  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.message.emit(this.modelForm);
  }

}
