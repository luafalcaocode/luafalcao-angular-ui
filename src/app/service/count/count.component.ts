import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  @Input() counts: any[];
 

  constructor() { }

  ngOnInit() {
  }

}
