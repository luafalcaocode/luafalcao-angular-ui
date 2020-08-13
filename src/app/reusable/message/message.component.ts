import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../../services/layout/common.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() details: any;

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

}
