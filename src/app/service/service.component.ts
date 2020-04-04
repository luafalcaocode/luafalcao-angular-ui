import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/pages/service.service';
import { CommonService } from '../services/layout/common.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services: any[];

  constructor(public service: ServiceService, public commonService: CommonService) { }

  ngOnInit() {
    this.service.initializePage('para-o-cliente');
    this.services = this.service.services;
    this.commonService.hideLoading();
  }
}
