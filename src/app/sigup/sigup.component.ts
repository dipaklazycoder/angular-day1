import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
  providers:[UserService]
})
export class SigupComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
    
  ]);
  password =  new FormControl('',[
    this.hasExclamation
  ]);
  registerForm : FormGroup;
  constructor(private fb : FormBuilder,
  public userService : UserService) {
    this.registerForm = this.fb.group({
    username: this.username,
    password: this.password
   })
  }
   hasExclamation(input : FormControl){
     const exclamation = input.value.indexOf('!')>=0;
     return exclamation?null :{needExclamation : true}
   }


  ngOnInit() {
  }

  register()
  {
    this.userService.register(this.registerForm.value.username, this.registerForm.value.password);
    console.log(this.registerForm);
  }
  increase(){
    this.userService.counter++;
  }

}
