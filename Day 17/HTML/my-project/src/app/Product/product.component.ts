import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/Models/ProductModel/ProductModel';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class Product
{
  id:number=0;
  name:string="";
  price:number=0;
  cat:string="";
  qty:number=0;

  public productArray:ProductModel[]=[
    {id:1, name:"Milk",price:100,cat:"diary",qty:2},
    {id:2, name:"Egg",price:10,cat:"Non-Veg",qty:3},
    {id:3, name:"Apple",price:20,cat:"Fruit",qty:10}
  ]

  Get():void{
    return;
  }
  Add():void{
    let temp:ProductModel=new ProductModel(this.id,this.name,this.price,this.cat,this.qty);
    this.productArray.push(temp);
  }
  Update():void{
    this.productArray.map((item)=>{
      if(this.id===item.id)
      {
        item.id=this.id;
        item.name=this.name;
        item.price=this.price;
        item.cat=this.cat;
        item.qty=this.qty
      }
    })
  }
  Reset():void{
    this.productArray.length=0
  }
}
