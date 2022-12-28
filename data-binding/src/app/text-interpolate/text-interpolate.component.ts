import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolate',
  templateUrl: './text-interpolate.component.html',
  styleUrls: ['./text-interpolate.component.css']
})
export class TextInterpolateComponent {

  student: any;

  students: any;

  date = new Date

  url = 'https://images.unsplash.com/photo-1669126240694-39b93683c347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

  add = (a: number, b: number) => a + b;

  constructor() {
    this.students = [
      {
        name: 'Tin Win Kyine',
        age: 30,
        hobby: 'Gaming'
      },
      {
        name: 'Honey',
        age: 25,
        hobby: 'Artist'
      }
    ];
  }

  onSelect(item: any) {
    this.student = item;
  }

}
