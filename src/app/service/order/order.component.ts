import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  inactive() {
    const orderForm = this.elementRef.nativeElement.querySelector('#order');
    orderForm.style.top = '800px';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';   
    }, 400);
  }
}
