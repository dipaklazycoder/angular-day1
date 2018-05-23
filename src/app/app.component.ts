import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  parentValue : string;

parentEvent(eventData)
{
  this.parentValue = eventData;
}

  users : User[] =[ 
    {
    firstname:"Bill",
    lastname:"Gates",
    income:10,
    dob: new Date("Dec 12 1965"),
    isworking:true,
    image:'assets/bill.jpg',
    vote:128
    
},
{
  firstname:"Dipak",
  lastname:"Sharma",
  income:10,
  dob: new Date("Sep 18 1989"),
  isworking:true,
  image:'assets/bill.jpg',
  vote:100
  
}]
}
