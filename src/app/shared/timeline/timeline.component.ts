import { Component, OnInit, Input } from '@angular/core';
import { TimelineViewModel } from '../../viewModels/timeline.viewModel';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() timeline: TimelineViewModel;
  constructor() { }

  ngOnInit() {
  }

}
