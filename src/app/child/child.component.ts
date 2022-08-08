import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`<h2>Welcome to Child Component</h2>
            <p>Count is {{count}}</p>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() count:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    for(let property in changes) {
      if(property === 'count') {

        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('FirstChange:', changes[property].firstChange);
      }
    }
    
  }

}
