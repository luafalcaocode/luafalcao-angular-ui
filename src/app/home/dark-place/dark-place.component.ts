import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingService } from '../../services/layout/loading.service';


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

  isLoading: boolean;
  isCompleted: boolean;
  isSendTextVisible: boolean;

  @Output() message: EventEmitter<any> = new EventEmitter<any>();


  constructor(public loadingService: LoadingService) { }

  ngOnInit() {
    this.isSendTextVisible = true;
  }

  sendMessage() {
    this.isSendTextVisible = false;
    this.isLoading = true;

    this.message.emit(this.modelForm);

    setTimeout(() => {
      this.isLoading = false;
      this.isCompleted = true;

      setTimeout(() => {
        this.isCompleted = false;
        this.isSendTextVisible = true;
        this.modelForm = { name: '', email: '', message: '' };
      }, 1000);
    }, 2000);
  }
}
