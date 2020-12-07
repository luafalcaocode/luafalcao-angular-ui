import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/layout/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() validations: string[];
  @Input() confirmButtonText: string;
  @Input() isActive: boolean;
  @Input() modalType: string;
  
  @Output() onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public modalService: ModalService) { }

  ngOnInit() {    
  }

  onClickConfirmButton() {
    this.onConfirm.emit(true);
  }
}
