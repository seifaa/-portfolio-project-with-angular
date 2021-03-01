import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }
  username= "ahmed"
  x=""
  show=false;
  isToggle(){
    this.show=!this.show
  }
  welcome(){
    this.username ="ahmed mohamed seif"
    alert("welcome "+this.username)
  }
  users = [ 
    {name:"ahmed",age:25,gender:"male",birthdate:"1/1/1995"},
    {name:"ahmed",age:25,gender:"male",birthdate:"1/1/1995"},
    {name:"ahmed",age:25,gender:"male",birthdate:"1/1/1995"},
    {name:"ahmed",age:25,gender:"male",birthdate:"1/1/1995"}



  ]

  ngOnInit(): void {
  }

}
