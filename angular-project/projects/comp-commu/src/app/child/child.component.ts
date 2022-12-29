import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {

  @Input('dataInChild')
  childData:any

  @Output()
  outData = new EventEmitter<any>()

  transfer(data:any) {
    this.outData.emit(data);
  }

}
