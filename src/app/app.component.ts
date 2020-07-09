import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display:boolean;
  name:string;
  email:string;
  phone:string;

  constructor(){}

  ngOnInit(){
    this.display=true;
    this.name="Satish Prasad";
    this.email="satish@sap.com";
    this.phone="12345678";

  }

  setValues(nameField,emailField,phoneField):void{
    this.name = nameField.value;
    this.email = emailField.value;
    this.phone = phoneField.value;
  }

  toggle():void{
    this.display = !this.display;
  }

}
