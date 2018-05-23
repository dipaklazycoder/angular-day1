import { Injectable } from "@angular/core";
import { USER_DATA} from "../data/mock";

@Injectable()
export class UserService{

   public counter : number = 0;
    getUserData():any {
        return USER_DATA;

    }

}