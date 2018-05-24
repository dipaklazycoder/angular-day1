import { Component, OnInit } from '@angular/core';
import{ Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

 num: number;
 data : number;
  constructor() { 
    Observable.interval(1000).subscribe((num)=>this.num=num);
    console.log(this.num);

    Observable.create((observer)=>{
      setTimeout(()=>{
        observer.next(100)},1000)

        setTimeout(()=>{
          observer.next(200)},2000)

          setTimeout(()=>{
            observer.next(300)},3000)
    
            setTimeout(()=>{
              observer.complete()},4000)
      
              setTimeout(()=>{
                observer.next(400)},5000)
        

               

      }).subscribe((data)=>this.data = data,
      (err)=>console.log('Error',err),
      ()=>console.log('completed')
    )
  }

  ngOnInit() {
  }

}
