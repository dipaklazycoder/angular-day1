import { Injectable } from "@angular/core";
import { USER_DATA} from "../data/mock";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../model/user';

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

}