import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deptdetails',
  templateUrl: './deptdetails.component.html',
  styleUrls: ['./deptdetails.component.css']
})
export class DeptdetailsComponent implements OnInit {

  public deptDetails:string="";

  constructor(private  activatedRouteObj: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activatedRouteObj.snapshot.params['id'];
    if(id=="Accounts")
    {
      this.deptDetails="Welcome to Accounts Section";
    }
    if(id=="Sales")
    {
      this.deptDetails="Welcome to Sales Section";
    }if(id=="Marketing")
    {
      this.deptDetails="Welcome to Marketing Section";
    }if(id=="Testing")
    {
      this.deptDetails="Welcome to Testing Section";
    }
    if(id=="Admin")
    {
      this.deptDetails="Welcome to Admin Section";
    }
  }

}
