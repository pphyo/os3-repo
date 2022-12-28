import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  min = 100;
  max = 500;
  value = 0;

  result: number[] = [];

  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  onDisplay(inp:any) {
    for (let index = 0; index < inp; index++) {
      this.result.push(index + 1);
    }
  }

  onPlay() {
    
  }

  onStop() {
    clearInterval(undefined);
  }

}
