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
  validationFileMessage: string = '';
  validatedAttachments: boolean;
  validation: string;
  invalid: Map<string, boolean> = new Map<string, boolean>();
  form: any;
  verificouCelular: boolean = false;
  formData: FormData = new FormData();
  @Input() isLoading: boolean;
  @Input() tiposDeProjeto;
  completing: boolean;
  btnSendDisabled: boolean = false;
  enviandoDados: boolean = false;
  formWasSubmittedOnce: boolean;
  message_status_request: string;
  code_status_request: number;

  constructor(private elementRef: ElementRef, private requestService: RequestService, private loaderService: LoaderService) {
    this.form = {};
  }

  ngOnChanges() {
    this.form.tiposDeProjeto = this.tiposDeProjeto;
  }

  ngOnInit() {
    console.log('onInit');
    this.files = [];
    this.form.anexos = [];
    this.formWasSubmittedOnce = false;

    this.form.solicitante = '';
    this.form.email  = '';
    this.form.tipoDeProjeto = '';
    this.form.observacoes = '';
  }

  onClickAttachment(field) {
    field.click();
  }

  onSelectedFiles(field) {
    this.invalid.clear();

    this.validationFileMessage = '';

    for (let prop in field.files) {
      if (field.files[prop].size) {
        try {
          this.validateAttachments(field.files[prop].name);
          this.files.push(field.files[prop]);
          this.selectedFiles = this.files.length;
          this.btnSendDisabled = true;
        }
        catch (err) {
          this.validatedAttachments = true;
          this.btnSendDisabled = true;
          if (!this.validationFileMessage.includes(err.message)) {
            this.validationFileMessage = `${err.message} ${err.dynamicText}`;
          }
          else if (!this.validationFileMessage.includes(err.dynamicText)) {
            if (+prop == field.files.length - 1) {
              this.validationFileMessage += ` e ${err.dynamicText}.`;
            }
            else {
              this.validationFileMessage += `, ${err.dynamicText}`
            }
          }

        }
      }
    }
  }

  onClickRemoveFile(name) {
    this.files.forEach((item, index) => {
      if (item.name.includes(name))
        this.files.splice(index, 1);
      this.selectedFiles = this.files.length;
    });


    if (this.selectedFiles == 0) {
      this.validationFileMessage = '';
    }
  }

  onSelectTipoDeProjeto(event) {
    const selecionado = this.form.tiposDeProjeto.find(item => item.id == event.target.value);

    if (selecionado.id != 0) { // != de selecione um projeto
      this.form.tiposDeProjeto[0].selecionado = false;
      this.form.tiposDeProjeto.forEach(item => {
        if (item.id == selecionado.id) {
          item.selecionado = true;
          this.formData.append('tipoDeProjeto', selecionado.nome);
        }
      });
    }
    else {
      this.form.tiposDeProjeto[0].selecionado = true;
    }

    if (this.formWasSubmittedOnce) {
      this.validateForm();
    }
  }

  onSubmit() {
    const thiss = this;
    const isValid = this.validateForm();

    this.formWasSubmittedOnce = true;

    if (isValid) {
      this.validation = '';
      this.enviandoDados = true;
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
        .then((response: any) => {
          if (response.success) {
            thiss.resetForm(true);
            this.message_status_request = 'solicitação de serviço enviada'
            this.code_status_request = 200;
          }
          thiss.isLoading = thiss.loaderService.hide();
          setTimeout(() => {
            thiss.isLoading = false;
            thiss.completing = false;
            thiss.inactive();
          }, 3000);
        }).catch(reason => {
          setTimeout(() => {
            thiss.isLoading = false;
            this.resetForm(false);
            this.code_status_request = 500;
            this.message_status_request = 'ops! ocorreu um erro'
          }, 3000);
        });
    }
    else {
      this.btnSendDisabled = true;
    }
  }

  resetForm(flagClearFields?: boolean) {

    if (flagClearFields) {
      (<HTMLFormElement>document.getElementById('formOrderService')).reset();
      this.formData = new FormData();
    }


    this.files = [];
    this.enviandoDados = false;
    this.selectedFiles = 0;
    this.completing = true;


  }

  inactive() {

    const orderForm = this.elementRef.nativeElement.querySelector('#order');
    orderForm.style.top = '800px';

    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }, 400);

  }

  validateForm(): boolean {
    const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.invalid.clear();

    try {
      if (!this.form.solicitante)
        this.invalid.set('solicitante', true);
      else
        this.invalid.set('solicitante', false);

      if (!this.form.email || !this.form.email.match(regExpEmail)) {
        this.invalid.set('email', true);
      }
      else {
        this.invalid.set('email', false);
      }

      const selecionado = this.form.tiposDeProjeto.find(item => item.selecionado).id;
      if (selecionado == 0)
        this.invalid.set('tiposDeProjeto', true);
      else
        this.invalid.set('tiposDeProjeto', false);

      this.invalid.forEach((value, key) => {
        if (value) {
          throw 'Por favor, preencha os campos em vermelho corretamente.';
        }
      });

      this.validation = '';

      return true;
    }
    catch (err) {
      this.validation = err;

      return false;
    }
  }

  validateField() {
    if (this.formWasSubmittedOnce) {
      this.validateForm();
    }
  }

  validateAttachments(name: any) {
    let typeOfValidation: string;
    let extension = name.lastIndexOf('.');
    let extension_name = name.substring(extension).toLowerCase();

    let exists = this.invalid.get(name);
    if (!exists) {
      if (EXTENSIONS.includes(extension_name)) {
        this.invalid.set(name, true);
        typeOfValidation = 'extension_file'
      }
      else {
        this.invalid.set(name, false);
      }

      for (const prop in this.files) {
        if (this.files[prop].name.includes(name)) {
          this.invalid.set(name, true);
          typeOfValidation = 'duplicated_file'
        }
        else {
          this.invalid.set(name, false);
        }
      }

      this.invalid.forEach((key, value) => {
        if (value) {
          switch (typeOfValidation) {
            case 'extension_file':
              throw { error_type: 'extension_file', message: 'não é possível fazer upload de arquivos com a extensão ', dynamicText: extension_name };
            case 'duplicated_file':
              throw { error_type: 'duplicated_file', message: `já foi inserido um anexo com o nome `, dynamicText: name };
          }
        }
      });
    }
  }


  showValidationFileMessage() {
    return (this.invalid.get('duplicated_file') || this.invalid.get('extension_file'));
  }
}
