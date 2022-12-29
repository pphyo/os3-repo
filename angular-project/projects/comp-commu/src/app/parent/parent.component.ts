import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent {

  parentData:any

  inData:any

  onDisplay(data:any) {
    this.parentData = data
  }

  setData(event:any) {
    this.inData = event
  }

}
