import { Component, OnInit, Input } from '@angular/core';

import { ImageViewModel } from '../../viewModels/image.viewModel';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  @Input() images: ImageViewModel[];
  constructor() { }

  ngOnInit() {
  }

}
