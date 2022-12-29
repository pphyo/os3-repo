import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {

  form:FormGroup

  date:Date = new Date

  list:Product[] = [
    {
      name: 'Sushi',
      price: 3000,
      description: '',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Ramen',
      price: 8000,
      description: 'Japan Coconut Noodle',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ramen-with-chicken-bone-broth-pork-shoulder-soft-boiled-egg-greens-d0f4e89.jpg?quality=90&webp=true&resize=300,272'
    }
  ]

  product:any

  constructor(private builder:FormBuilder) {
    this.form = builder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: '',
      image: ['', Validators.required]
    })
  }

  onAdd() {
    this.list.push(this.form.value)
    this.form.reset()
  }

  onSelectProduct(event:any) {
    this.product = event
  }

}
