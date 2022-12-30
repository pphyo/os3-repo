import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  data:string = ''

  constructor() {
    this.log('Constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChange')
    console.log(changes)
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck(): void {
    this.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked')
  }

  private log(message:string) {
    console.log(`${message} called.`)
  }

}
