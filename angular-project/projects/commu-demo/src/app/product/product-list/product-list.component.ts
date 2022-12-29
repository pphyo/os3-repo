import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent {

  @Input()
  productList:Product[] = []

  name:any

  @Output()
  selectedProduct = new EventEmitter<Product>

  onSelect(index:number) {
    let product = this.productList.at(index)
    this.selectedProduct.emit(product)
    this.name = product?.name
  }

}
