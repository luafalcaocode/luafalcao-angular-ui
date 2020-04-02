import { Injectable } from '@angular/core';
import { CommonService } from '../../services/layout/common.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public commonService: CommonService) { }

  initializePage(screen: string) {
    switch(screen) {
      case 'para-o-cliente':
        
        break;
      default:
        break;
    }

    this.commonService.initializePage();
  }
}
