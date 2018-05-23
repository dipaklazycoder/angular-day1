import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  parentValue : string;

constructor(public userService : UserService){

}
  parentEvent(eventData)
{
  this.parentValue = eventData;
}

  users : User[];
  ngOnInit(){
    this.users = this.userService.getUserData()
    .subscribe((users)=>this.users=users);
    
  }

  increase()
  {
    this.userService.counter=this.userService.counter+1;
  }
}
