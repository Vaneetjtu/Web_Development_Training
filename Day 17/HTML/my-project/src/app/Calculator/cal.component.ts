import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class Calculator
{
    amount:number=0;
    rate:number=0;
    time:number=0;
    sim:boolean=false;
    com:boolean=false;
    sresult:number=0;
    cresult:number=0;



    Submit():void{
      if(this.sim && this.com)
      {
        this.sresult=this.amount*this.rate*this.time;
        this.cresult=this.amount*((1+this.rate)^this.time);
      }
      if(this.sim)
      {
        this.sresult=this.amount*this.rate*this.time;
      }
      if(this.com)
      {
        this.cresult=this.amount*Math.pow(1+this.rate,this.time);        
      }
    }
}
