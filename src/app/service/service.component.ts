import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/pages/service.service';
import { CommonService } from '../services/layout/common.service';
import { LoadingService } from '../services/layout/loading.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  screen: string;
  services: any[];
  counts: any[];
  titulos: string[] = ['Para a sua necessidade', 'Para o seu negócio', 'Para automatizar uma tarefa burocrática'];
  component: any;
  backgroundHeader: string = 'black';
  backgroundMobile: string = 'black';
  backgroundMobileContainer: string = 'rgba(0, 0, 0, 0.9)';

  constructor(public service: ServiceService, public commonService: CommonService, public loading: LoadingService, public router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.loading.show();
      this.screen = param.screen;
      this.service.initializePage(this.screen);
      this.services = this.service.services;
      this.counts = this.service.counts;

      if (this.component) {
        this.component.revealed = false;        
      }

      this.loading.hide();
    });
  }

  onActiveReveal(event) {
      if (event) {
        this.component = event;
      }
  }

  ngOnChange() {
  }

  ngOnInit() {
  }
}
