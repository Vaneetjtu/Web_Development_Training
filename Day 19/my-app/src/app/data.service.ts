import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProducts():any[]{
    const productArray:any[]=[
      {id:1, name:"Milk",price:100,cat:"diary",qty:2},
      {id:2, name:"Egg",price:10,cat:"Non-Veg",qty:3},
      {id:3, name:"Apple",price:20,cat:"Fruit",qty:10}
    ]
    return productArray;
  }
  
  getEmp():any[]{
    const empArray:any[]=[
      {sno: 1, name:"Scott1",grade:1},
      {sno: 2, name:"Scott2",grade:2},
      {sno: 3, name:"Scott3",grade:3},
      {sno: 4, name:"Scott4",grade:4},
      {sno: 5, name:"Scott5",grade:1},
      {sno: 6, name:"Scot6",grade:3},
      {sno: 7, name:"Scott7",grade:4},
      {sno: 8, name:"Scott8",grade:2}
    ]
    return empArray;
  }

  public dataArray:any[] = [];
  public url:string  =  "http://localhost:3000/employee/";
  
  constructor(private  httpObj:HttpClient) {
    
  }

  getAll():Observable<any>
  {     
      return this.httpObj.get(this.url);
  }

  getById(id:number):Observable<any>
  {       
      return this.httpObj.get(this.url + id);
  }

  add(Obj:any):Observable<any>
  {   
      return this.httpObj.post(this.url , Obj);
  }

  update(Obj:any):Observable<any>
  {     
      return this.httpObj.put(this.url + Obj.id, Obj);
  }

  delete(id:number):Observable<any>
  {     
      return this.httpObj.delete(this.url + id);
  }
}
