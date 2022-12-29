import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  form:FormGroup

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      name: '',
      email: ['', Validators.email],
      phones: builder.array([
        builder.control('')
      ])
    })
  }

  get phones() {
    return this.form.get('phones') as FormArray
  }

  addPhone() {
    this.phones.push(this.builder.control(''))
  }

  removePhone(index:number) {
    if(this.phones.length > 1)
      this.phones.removeAt(index)
  }
}
