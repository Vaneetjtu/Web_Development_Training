const product=require("./ProductModule");
const print=(item)=>{
    const {Product, Cat, Price, Qty }=item;
    let str1=`Product: ${Product}, Category: ${Cat}, Price: ${Price}, Qty: ${Qty}`;
    console.log(str1);
}
console.log("--------------------------------------------------------------------------------------");
console.log("All Products");
product.allProducts().map((item)=>{
    print(item);
})
console.log("--------------------------------------------------------------------------------------");
console.log("Products by Veg category");
product.cat().map((item)=>{
    print(item);
    
})
console.log("--------------------------------------------------------------------------------------");
console.log("Products between Rs.10-Rs.15");
product.price().map((item)=>{
    print(item);
    
})
console.log("--------------------------------------------------------------------------------------");
console.log("Out of stock");
product.outStock().map((item)=>{
    print(item);
    
})
console.log("--------------------------------------------------------------------------------------");
console.log("In Stock");
product.inStock().map((item)=>{
    print(item);
    
})

