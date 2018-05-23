import {User} from "../model/user";

export const USER_DATA  : User[] =[ 
    {
    firstname:"Bill",
    lastname:"Gates",
    income:10,
    dob: new Date("Dec 12 1965"),
    isworking:true,
    image:'assets/bill.jpg',
    vote:128
    
},
{
  firstname:"Steve",
  lastname:"Jobs",
  income:100,
  dob: new Date("Sep 18 1989"),
  isworking:false,
  image:'assets/bill.jpg',
  vote:100
  
}]