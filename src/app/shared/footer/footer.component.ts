import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: string;
  telefone: string;
  constructor() { 
    this.email = 'lpjfalcao@gmail.com';
    this.telefone = '+55 (21) 97322-1432'
  }

  ngOnInit() {
  }

  showWhatsAppInfo() {
    Swal.fire({
      icon: 'info',
      title: 'Fale comigo através do Whats App',
      html: '<h5><strong>+55 (21) 97322-1432</strong></h5>',
    });
  }

}
