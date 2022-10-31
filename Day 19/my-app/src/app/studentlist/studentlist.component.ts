import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent 
{

  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;
  selectedId:number=0;

  public studentsArray:any[] =  [];

  constructor(private  serviceObj:DataService) {
    
  }

 
  public getData_click()
  {	 
       this.serviceObj.getAll().subscribe( (response:any) =>
       {
          this.studentsArray = response;
       });
  }

  public addData_click()
  {	 
    let stObj:any = {};
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;


    this.serviceObj.add(stObj).subscribe( (response:any) =>
    {
      // this.studentsArray = response;
      alert("New Student details are added to server");
      this.getData_click();
    });
  }


  public selectData_click(id:number)
  {	 
    this.selectedId=id;
       this.serviceObj.getById(id).subscribe( (resData:any) =>
       {
        this.name = resData.name;
        this.email = resData.email;
        this.city = resData.city;
        this.age = resData.age;
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
    let stObj:any = {};
    stObj.id = this.selectedId;    
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;
    this.serviceObj.update(stObj).subscribe((response)=>{
      alert("Updated");
      this.getData_click();
    })
  }

}
