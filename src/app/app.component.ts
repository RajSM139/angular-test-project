import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    name: 'Rajesh',
    gender: 'male',
    age: 33
  };
  myArr = ['Ramesh', 'Suresh', 'Dinesh'];
  property = 'text';
  value = 'Property Binding Example';
  myEvent(event) {
    console.log(event);
  }
}
