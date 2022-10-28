import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public emparray:any[]=[
    {sno: 1, name:"Scott1",grade:1},
    {sno: 2, name:"Scott2",grade:2},
    {sno: 3, name:"Scott3",grade:3},
    {sno: 4, name:"Scott4",grade:4},
    {sno: 5, name:"Scott5",grade:1},
    {sno: 6, name:"Scot6",grade:3},
    {sno: 7, name:"Scott7",grade:4},
    {sno: 8, name:"Scott8",grade:2}
  ]
}
