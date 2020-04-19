import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/pages/service.service';
import { CommonService } from '../services/layout/common.service';
import { LoadingService } from '../services/layout/loading.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services: any[];
  counts: any[];

  constructor(public service: ServiceService, public commonService: CommonService, public loading: LoadingService) { }

  ngOnInit() {
    this.loading.show();
    this.service.initializePage('para-o-cliente');
    this.services = this.service.services;
    this.counts = this.service.counts;
    this.loading.hide();
  }
}
