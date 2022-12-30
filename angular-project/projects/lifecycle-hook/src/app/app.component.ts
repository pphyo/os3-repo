import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  cockpit:string = ''

  onAdd(val:string) {
    this.cockpit = val
  }
}
