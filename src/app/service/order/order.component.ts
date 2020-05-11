import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  files: File[];
  selectedFiles: number = 0;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.files = [];
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
        }
      }

      field.value = '';
      this.selectedFiles = this.files.length;
      console.log(this.files);
    }
    catch (err) {
      console.log('extensão inválida de arquivo');
      console.log(err.message);
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
    let extension_name = name.substring(extension);
    if (extension_name.includes('.exe')) {
      throw Error;
    }
  }

  inactive() {
    const orderForm = this.elementRef.nativeElement.querySelector('#order');
    orderForm.style.top = '800px';
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }, 400);
  }
}
