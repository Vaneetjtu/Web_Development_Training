import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  public data:any;

  constructor(private httpObj:HttpClient) { 
  }
  
  getData():void{
    let url='http://localhost:3000/employee';
    this.httpObj.get(url).subscribe((res)=>{
      this.data=res;
    })
  }


}
