import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent {

  list:any

  constructor(private service:StudentService) {
    this.search();
  }

  onSave(form:NgForm) {
    this.service.save(form.value);
    this.search();
    form.resetForm()
  }

  search() {
    this.list = this.service.search();
  }

}
