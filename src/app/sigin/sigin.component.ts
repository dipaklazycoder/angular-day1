import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  sigin(form: NgForm){
    this.userService.login(form.value.username,form.value.password)
    console.log(form);
  }

  getData()
  {
    this.userService.getUserData();
  }

}
