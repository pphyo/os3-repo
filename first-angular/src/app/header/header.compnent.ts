import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `
    <h3>This is a Header Component</h3>
    <app-footer></app-footer>
  `
})
export class HeaderComponent {}
