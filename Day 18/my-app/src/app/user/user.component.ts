import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent 
{   
  public start:number=0;
  public end:number=4;
  public btn:boolean=true;

 public  userArray:any[]  = [
	{  name :  "Scott-1", age: 18, role :  "Analyst", salary: 50000},
	{  name :  "Scott-2", age: 18,role :  "Analyst", salary: 50000},
	{  name :  "Scott-3", age: 18,role :  "Analyst", salary: 50000},
	{  name :  "Scott-4", age: 18, role :  "Analyst", salary: 50000},
	{  name :  "Scott-5", age: 18, role :  "Analyst", salary: 50000},
	{  name :  "Scott-6", age: 18, role :  "Analyst", salary: 50000},
	{  name :  "Scott-7", age: 18, role :  "Analyst", salary: 50000},
	{  name :  "Scott-8", age: 18, role :  "Analyst", salary: 50000},
  {  name :  "Scott-9", age: 18, role :  "Analyst", salary: 50000},
  {  name :  "Scott-10", age: 18, role :  "Analyst", salary: 50000},
	{  name :  "Scott-11", age: 18, role :  "Analyst", salary: 50000},
  {  name :  "Scott-12", age: 18, role :  "Analyst", salary: 50000}
	];

  fn_load():void{
    this.end+=4;
    if(this.end>this.userArray.length){
      this.btn=false;
    }
  }

}
