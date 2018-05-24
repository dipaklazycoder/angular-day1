import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user-service';
import * as firebase from 'firebase'
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

   firebase.initializeApp({
     apiKey:"AIzaSyDVfB2r7aKUpK_UeOloqWWhRoljo7NXc8s",
     authDomain:"sg-test-ca4f8.firebaseapp.com"
   });
    this.users = this.userService.getUserData()
    .subscribe((users)=>this.users=users);
    // this.userService.getApiData().subscribe(data=>
    //   {
    //     this.users = data
    //     console.log(data)
    //   });
    
    
  }
  signout()
  {
    this.userService.signOut();
  }
  increase()
  {
    this.userService.counter=this.userService.counter+1;
  }
}
