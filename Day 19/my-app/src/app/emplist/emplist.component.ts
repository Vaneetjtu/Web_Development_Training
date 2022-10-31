import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {

  empno:number  = 0;
  name:string  = "";
  job:string  = "";
  deptno:number = 0;
  selectedId:number=0;

  public empArray:any[] =  [];

  constructor(private  serviceObj:DataService) {
    
  }

 
  public getData_click()
  {	 
       this.serviceObj.getAll().subscribe( (response:any) =>
       {
          this.empArray = response;
       });
  }

  public addData_click()
  {	 
    let empObj:any = {};
    empObj.id = this.empno;
    empObj.Name = this.name;
    empObj.Job = this.job;
    empObj.DeptNo = this.deptno;


    this.serviceObj.add(empObj).subscribe( (response:any) =>
    {
      // this.studentsArray = response;
      alert("New details are added to server");
      this.getData_click();
    });
  }


  public selectData_click(id:number)
  {	 
    this.selectedId=id;
       this.serviceObj.getById(id).subscribe( (resData:any) =>
       {
         this.empno = resData.id;
         this.name = resData.Name;
        this.job = resData.Job;
        this.deptno = resData.DeptNo;
       });
  }

  public deleteData_click(id:number)
  {	 
       this.serviceObj.delete(id).subscribe( (resData:any) =>
       {
        alert("Selected Student details are deleted from  server");
        this.getData_click();
       });
  }

  public updateData_click()
  {	 
    let empObj:any = {};
    empObj.id = this.selectedId;    
    empObj.Name = this.name;
    empObj.Job = this.job;
    empObj.DeptNo = this.deptno;
    this.serviceObj.update(empObj).subscribe((response)=>{
      alert("Updated");
      this.getData_click();
    })
  }


}
