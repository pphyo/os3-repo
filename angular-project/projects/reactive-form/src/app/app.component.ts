import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  form:FormGroup
  list:any[] = []

  constructor(private builder:FormBuilder) {
    // this.form = new FormGroup({
    //   name: new FormControl,
    //   price: new FormControl,
    //   description: new FormControl,
    //   stock: new FormControl
    // })

    this.form = builder.group({
      name: ['', Validators.required],
      price: [0, Validators.min(1)],
      description: [''],
      stock: [false]
    })
  }

  setValue(data:any) {
    console.log(data)
    this.form.setValue(data)
  }

  onUpdate(item:any) {
    this.form.patchValue(item);
  }

  onSave() {
    this.list.push(this.form.value)
    this.form.reset()
  }

}
