import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  public response:any;
  constructor(private httpObj:HttpClient) {
  }
  
  getData():void{
    let url='https://www.w3schools.com/angular/customers.php';
    this.httpObj.get(url).subscribe((res:any)=>{
       this.response=res.records;       
    })
    
   }



}
