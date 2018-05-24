import { Injectable } from "@angular/core";
import { USER_DATA} from "../data/mock";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../model/user';
import * as firebase from 'firebase';
@Injectable()
export class UserService{

   public counter : number = 0;

   constructor(private http: Http){

   }
    getUserData():any {
       // return USER_DATA;
       return this.http.get("assets/data/user-data.json")
       .map((response) =><User[]> response.json().userData)

    }

    getApiData()
    {
        
        return this.http.get("https://sg-test-ca4f8.firebaseio.com/userData.json")
        .map(response=>response)
        .subscribe((data)=>console.log(data));
 
    }

    register(email,password)
    {
      console.log('Tersting service register');  
      firebase.auth()
      .createUserWithEmailAndPassword(email,password)
      .then(response=>console.log(response))
      .catch(err=>console.log(err));
    }

    login(email,password){

        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }
}