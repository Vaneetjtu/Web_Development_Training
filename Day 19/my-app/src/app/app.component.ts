import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public deptArray:any[]=[];
  constructor(private serviceObj:DataService){
    
  }
  public getProducts():void{
    this.deptArray=this.serviceObj.getProducts();
  }
  public getEmp():void{
    this.deptArray=this.serviceObj.getEmp();
  }
}
