export class ProductModel{
    id:number;
    name:string;
    price:number;
    cat:string;
    qty:number
    constructor(id:number,name:string,price:number,cat:string,qty:number){
        this.id=id;
        this.name=name;
        this.price=price;
        this.cat=cat;
        this.qty=qty;
    }
}