import {Component, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../model/user';

@Component({
    selector: 'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent {

    @Input('user')
     user : User;

     @Input('xyz')
     title : string

     @Output('childEvent') childEvent = new EventEmitter<string>();

     onKeyUp(value: string)
     {
         this.childEvent.emit(value);
         console.log(value);
     }
    
     moreInfo(user: User)
    {
        alert('More Info');
    }
    

    
}