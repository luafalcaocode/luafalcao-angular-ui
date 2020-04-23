import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear;
  email: string;
  telefone: string;
  @Input() backgroundColor: string;
  constructor() {
    this.email = 'lpjfalcao@gmail.com';
    this.telefone = '+55 (21) 97322-1432'
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

  showWhatsAppInfo() {

  }
  
}
