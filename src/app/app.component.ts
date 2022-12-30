import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'walkthrough';
  name:string="";
  pass:string="";
  classname:string="";
  regs:any=[];
  id:number=0;
  constructor() {
    this.name="user";
    this.pass="user";
    this.classname="text-warning";
    //this.regs.push({"name":this.name,"id":this.id});
  }
  ngOnInit(): void {
   // name="no user";
  }
  submit() {
    this.id++;
    this.name=this.name.toUpperCase();
    this.pass="submitted";
    this.classname="text-success";
    this.regs.push({"name":this.name,"id":this.id});
    console.log((document.getElementById("nameuser") as HTMLInputElement).innerText);
  }
  
}