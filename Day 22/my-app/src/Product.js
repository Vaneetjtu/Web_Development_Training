import { useState } from "react";

const Product=()=>{
    const [name,setName]=useState("");
    const [qty,setQty]=useState(0);
    const [price,setPrice]=useState(0);
    const [total,setTotal]=useState(0);
    const getTotal=()=>{
        setTotal(price*qty);
    }
    return(
        <>
        <h1>Product Details</h1>
        <hr/>
        Name: <input type="text" onChange={(e)=>{setName(e.target.value)}}/> <br/> <br/>
        Unit Price: <input type="number" onChange={(e)=>{setPrice(e.target.value)}}/> <br/> <br/>
        Quantity: <input type="number" onChange={(e)=>{setQty(e.target.value)}}/> <br/> <br/>
        <input type="button" value="Get Total" onClick={getTotal}/> <br/> <br/>
        Product Name: {name} <br/> <br/>
        Total Amount: {total} <br/> <br/>
        </>
    )
}
export default Product;