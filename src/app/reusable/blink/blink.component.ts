import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blink',
  templateUrl: './blink.component.html',
  styleUrls: ['./blink.component.scss']
})
export class BlinkComponent implements OnInit {
  @Input() something: string = '|';
  constructor() { }

  ngOnInit() {
  }

}
