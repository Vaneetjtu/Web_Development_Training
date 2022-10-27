import { Component } from '@angular/core';

@Component({
  selector: 'Emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class Emp {
  public id:number=54654564;
  public name:string="Stephan";
  public job:string="Manager";
  public sal:number=75000;
  public dept:number=10;
}
