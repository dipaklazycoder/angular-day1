import { Injectable } from "@angular/core";
import { USER_DATA} from "../data/mock";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../model/user';
import * as firebase from 'firebase';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Router} from '@angular/router';
@Injectable()
export class UserService{

   public counter : number = 0;
   token: string;

   constructor(private http: Http,
private httpClient : HttpClient,
private router: Router){

   }
    getUserData():any {
       // return USER_DATA;
       return this.http.get("assets/data/user-data.json")
       .map((response) =><User[]> response.json().userData)

    }

    getApiData()
    {
        this.httpClient.get<User[]>("https://sg-test-ca4f8.firebaseio.com/userData.json",{
            // params : new HttpParams().set("auth", this.getToken()),
                             
             })
             .subscribe(data=>console.log(data));


        // return this.http.get("https://sg-test-ca4f8.firebaseio.com/userData.json")
        // .map(response=>response)
        // .subscribe((data)=>console.log(data));

    //     this.httpClient.get("https://sg-test-ca4f8.firebaseio.com/userData.json+auth?="+
    // this.getToken())
    // .subscribe(response=>console.log(response));

    // this.httpClient.get("https://sg-test-ca4f8.firebaseio.com/userData.json",{
    // params: new HttpParams().set("auth", this.getToken()),
    // headers: new HttpHeaders().set()
    // })
    // .subscribe(response=>console.log(response));
 
 
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
        .then(response=>{
            firebase.auth().currentUser.getIdToken()
            .then(token=>{ 
                console.log(token)
                this.token=token})
        .catch(err=>console.log(err))
        this.router.navigate(['pipe'])
    });
}

    getToken(){
        return this.token;
    }

    isAuthenticated()
    {
        return this.token!=null;
    }
    signOut(){
        firebase.auth().signOut();
        this.token=null;
    }
}