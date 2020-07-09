import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-onchange-demo',
  templateUrl: './onchange-demo.component.html',
})
export class OnchangeDemoComponent implements OnChanges {

  @Input('myname')
  myname:string;
  @Input('myemail')
  myemail:string;
  @Input('myphone')
  myphone:string;

  constructor() { }

  ngOnChanges(changes:{[propName:string]:SimpleChange}):void{
    console.log('Some property Changed');
    console.log('Changes: ',changes);
  }

}
