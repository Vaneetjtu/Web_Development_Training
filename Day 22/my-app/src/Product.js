import { useState } from "react";

const Product=()=>{
    const [name,setName]=useState("");
    const [qty,setQty]=useState(0);
    const [price,setPrice]=useState(0);
    const [total,setTotal]=useState(0);
    const inputName=(event)=>{
        setName(event.target.value);
    }
    const inputQty=(event)=>{
        setQty(event.target.value);
    }
    const inputPrice=(event)=>{
        setPrice(event.target.value);
    }
    const getTotal=()=>{
        setTotal(price*qty);
    }
    return(
        <>
        <h1>Product Details</h1>
        <hr/>
        Name: <input type="text" onChange={inputName}/> <br/> <br/>
        Unit Price: <input type="number" onChange={inputPrice}/> <br/> <br/>
        Quantity: <input type="number" onChange={inputQty}/> <br/> <br/>
        <input type="button" value="Get Total" onClick={getTotal}/> <br/> <br/>
        Product Name: {name} <br/> <br/>
        Total Amount: {total} <br/> <br/>
        </>
    )
}
export default Product;