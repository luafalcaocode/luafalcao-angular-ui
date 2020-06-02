import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { EXTENSIONS } from '../../constants/extensions.const';
import { RequestService } from '../../services/request.service';
import { LoaderService } from '../../services/layout/loader.service';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  files: File[];
  selectedFiles: number = 0;
  validationFileMessage: string;
  form: any;
  verificouCelular: boolean = false;
  formData: FormData = new FormData();
  @Input() isLoading: boolean;
  completing: boolean;

  constructor(private elementRef: ElementRef, private requestService: RequestService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.files = [];
    this.form = {};
    this.form.tiposDeProjeto = [
      {
        nome: 'Selecione um projeto',
        id: 0,
        selecionado: true,
      },
      {
        nome: 'Web API',
        id: 1,
        selecionado: false
      },
      {
        nome: 'Interfaces de Usuário',
        id: 2,
        selecionado: false
      },
      {
        nome: 'Single Page Application',
        id: 3,
        selecionado: false
      },
      {
        nome: 'Portais Web',
        id: 4,
        selecionado: false
      },
      {
        nome: 'Migração de Sistemas para .NET',
        id: 5,
        selecionado: false
      },
      {
        nome: 'Banco de Dados',
        id: 6,
        selecionado: false
      }
    ];

    this.form.anexos = [];
  }

  onClickAttachment(field) {
    field.click();
  }

  onSelectedFiles(field) {
    try {
      for (let prop in field.files) {
        if (field.files[prop].size) {
          this.validateFile(field.files[prop].name);
          this.files.push(field.files[prop]);
          this.selectedFiles = this.files.length;
          this.validationFileMessage = '';
        }
      }

      field.value = '';
    }
    catch (err) {
      this.validationFileMessage = err.message;
    }
  }

  onClickRemoveFile(name) {
    this.files.forEach((item, index) => {
      if (item.name.includes(name))
        this.files.splice(index, 1);
      this.selectedFiles = this.files.length;
    });
  }

  validateFile(name: string) {
    let extension = name.lastIndexOf('.');
    let extension_name = name.substring(extension).toLowerCase();
    if (EXTENSIONS.includes(extension_name)) {
      throw { message: `não é possível fazer upload de arquivos com a extensão ${extension_name}` };
    }

    for (const prop in this.files) {
      if (this.files[prop].name.includes(name)) {
        throw { message: `já foi inserido um anexo com o nome ${name}` };
      }
    }
  }

  onSelectTipoDeProjeto(event) {
    debugger;
    console.log(this.form.tiposDeProjeto.find(item => item.id == event.target.value).nome);
    this.formData.append('tipoDeProjeto', this.form.tiposDeProjeto.find(item => item.id == event.target.value).nome);
  }

  onSubmit() {
    const thiss = this;
    this.isLoading = this.loaderService.show();
    this.completing = false; 
    this.formData.append('solicitante', this.form.solicitante);
    this.formData.append('email', this.form.email);
    this.formData.append('observacoes', this.form.observacoes);

    this.files.forEach(file => {
      this.formData.append("file", file, file.name);
    });

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    this.requestService.post('/servicos/solicitacao', this.formData, { headers: headers })
      .toPromise()
      .then((response) => {
        thiss.isLoading = thiss.loaderService.hide();
        thiss.completing = true;
        setTimeout(() => {
          thiss.completing = false;
          thiss.isLoading = false;
        }, 1000);
      }).catch(reason => {
        console.log(reason);
      });
  }



  inactive() {
    const orderForm = this.elementRef.nativeElement.querySelector('#order');
    orderForm.style.top = '800px';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }, 400);
  }
}
