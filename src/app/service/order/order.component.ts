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
  validationFileMessage: string = 'não é possível fazer upload de arquivos com a extensão ';
  validatedAttachments: boolean;
  validation: string;
  invalid: Map<string, boolean> = new Map<string, boolean>();
  form: any;
  verificouCelular: boolean = false;
  formData: FormData = new FormData();
  @Input() isLoading: boolean;
  @Input() tiposDeProjeto;
  completing: boolean;
  enviandoDados: boolean = false;

  constructor(private elementRef: ElementRef, private requestService: RequestService, private loaderService: LoaderService) {
    this.form = {};
  }

  ngOnChanges() {
    console.log('onCHanges');
    this.form.tiposDeProjeto = this.tiposDeProjeto;
  }

  ngOnInit() {
    console.log('onInit');
    this.files = [];
    this.form.anexos = [];
  }

  onClickAttachment(field) {
    field.click();
    this.validationFileMessage = '';
  }

  onSelectedFiles(field) {

    for (let prop in field.files) {
      if (field.files[prop].size) {
        try {
          this.validateFile(field.files[prop].name);
          this.files.push(field.files[prop]);
          this.selectedFiles = this.files.length;
          // montar uma validação com dicionário igual a dos outros campos pros arquivos
          // adicionar as css no campo de seleção
          // melhorar o efeito de ocultar a validação do anexo e add transição nos demais
        }
        catch (err) {
          this.validatedAttachments = true;
          this.validationFileMessage += err.message + ', ';
        }
      }
    }

    //field.value = '';

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
      throw { message: extension_name };
    }

    for (const prop in this.files) {
      if (this.files[prop].name.includes(name)) {
        throw { message: `já foi inserido um anexo com o nome ${name}` };
      }
    }
  }

  onSelectTipoDeProjeto(event) {
    const itemSelecionado = this.form.tiposDeProjeto.find(item => item.id == event.target.value);
    itemSelecionado.selecionado = true;
    this.invalid.set('tiposDeProjeto', false);
    this.form.tiposDeProjeto.forEach(item => {
      if (item.id != itemSelecionado.id) {
        item.selecionado = false;
      }
    });

    this.formData.append('tipoDeProjeto', itemSelecionado.nome);
  }

  onSubmit() {
    const thiss = this;

    try {
      thiss.validateForm();
      this.validation = '';
      thiss.enviandoDados = true;
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
            thiss.files = [];
            thiss.enviandoDados = false;
            (<HTMLFormElement>document.getElementById('formOrderService')).reset();
            thiss.formData = new FormData();
            thiss.selectedFiles = 0;
          }
          thiss.isLoading = thiss.loaderService.hide();
          thiss.completing = true;
          setTimeout(() => {
            thiss.completing = false;
            thiss.isLoading = false;
          }, 3000);
        }).catch(reason => {
          thiss.isLoading = thiss.loaderService.hide();
          thiss.completing = true;

          setTimeout(() => {
            thiss.completing = false;
            thiss.isLoading = false;
          }, 1000);
        });
    }
    catch (err) {
      this.validation = err;
    }
  }

  inactive() {
    const orderForm = this.elementRef.nativeElement.querySelector('#order');
    orderForm.style.top = '800px';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }, 400);
  }

  validateForm() {
    if (!this.form.solicitante)
      this.invalid.set('solicitante', true);
    else
      this.invalid.set('solicitante', false);

    if (!this.form.email)
      this.invalid.set('email', true);
    else
      this.invalid.set('email', false);

    if (!this.form.observacoes)
      this.invalid.set('observacoes', true);
    else
      this.invalid.set('observacoes', false);

    const selecionado = this.form.tiposDeProjeto.find(item => item.selecionado).id;
    if (selecionado == 0)
      this.invalid.set('tiposDeProjeto', true);
    else
      this.invalid.set('tiposDeProjeto', false);

    this.invalid.forEach((key, value) => {
      if (key) {
        throw 'Por favor, preencha os campos em vermelho.';
      }
    });
  }

  validateField(chave: string) {
    if (chave)
      this.invalid.set(chave, false);
  }
}
