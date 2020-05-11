import { Component, OnInit, ElementRef } from '@angular/core';

import { EXTENSIONS } from '../../constants/extensions.const';

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

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.files = [];
    this.form = {};
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

  onKeyPress(event) {
    return event.charCode >= 48 && event.charCode <= 57
  }

  addPhoneMask() {
    if (this.form.phone.length == 1)
      this.form.phone = '(' + this.form.phone;

    if (this.form.phone.length == 3)
      this.form.phone = this.form.phone + ') ';

    if (this.form.phone.includes('(21)') && this.form.phone[5] == '9' && !this.verificouCelular) {
      this.form.phone = this.form.phone + ' ';
      this.verificouCelular = true;
    }

    if (this.form.phone.length == 10)
      this.form.phone = this.form.phone + '-';
  }

  inactive() {
    const orderForm = this.elementRef.nativeElement.querySelector('#order');
    orderForm.style.top = '800px';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }, 400);
  }
}
