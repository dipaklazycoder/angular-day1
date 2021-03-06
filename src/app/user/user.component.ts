import {Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, SimpleChanges, ViewEncapsulation } from '@angular/core';
import {User} from '../model/user';

@Component({
    selector: 'app-user',
    templateUrl:'./user.component.html',
    styleUrls:[`./user.component.css`],
    encapsulation: ViewEncapsulation.None
})
// export class UserComponent implements OnInit, OnChanges, AfterContentInit,
// AfterContentChecked, AfterViewInit, AfterViewChecked,DoCheck,OnDestroy{
    export class UserComponent{
    @Input('users')
     users : User[];

     @Input('xyz')
     title : string

     myclasses : any = {
         'dob': true,
         'feature':false
     }

     bgColor = {
         backgroundColor : 'gray'
     }

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

    constructor(){
        console.log("contructor called")
    }
    ngOnChanges(changes: SimpleChanges){ 
        console.log("ngOnChange");
}
    ngOnInit(){
        console.log("ngOnInit");
        
    }
    ngDoCheck(){ console.log("ngDoCheck");
    
}
ngAfterContentInit(){ console.log("ngAfterConyentInit");
}
ngAfterContentChecked(){ console.log("ngAfterContentChecked");
}
ngAfterViewInit(){ console.log("ngAfterViewInit");
}
ngAfterViewChecked(){"ngAfterViewChecked"}
ngOnDestroy(){ console.log("ngOnDestroy");
}
    

    
}