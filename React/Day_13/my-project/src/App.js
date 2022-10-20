import React, { Component } from 'react';
import './App.css';

function App() {
  const products=[
    {Product: "Milk",
        Cat: "Diary",
        Price: "30",
        Qty: "2"
    },
    {Product: "Egg",
        Cat: "Non-veg",
        Price: "10",
        Qty: "0"
    },
    {Product: "Banana",
        Cat: "Veg",
        Price: "15",
        Qty: "1"
    },
    {Product: "Apple",
        Cat: "Veg",
        Price: "20",
        Qty: "0"
    }    ];
    const customer=[
      {Name: "Barry", Email: "barry@gmail.com", Phone: "9999999999", Orders: "1"},
      {Name: "Harry", Email: "harry@gmail.com", Phone: "9999999999", Orders: "0"},
      {Name: "Larry", Email: "larry@gmail.com", Phone: "9999999999", Orders: "2"}
    ]

    const r1=customer.map((item)=>{
     return(<div>Name: {item.Name} Email: {item.Email} Phone: {item.Phone} Orders: {item.Orders}</div>)
    })

    const r2=products.map((item)=>{
      return(
        <tr>
          <td>{item.Product}</td>
          <td>{item.Cat}</td>
          <td>{item.Price}</td>
          <td>{item.Qty}</td>
        </tr>
      )
    })

    return(
      <>
      <h1>Customer Details</h1>
      <hr/>
    <p>
      {r1}
    </p>
    <h2>Product Details</h2>
    <table>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Qty</th>
      </tr>
      {r2}
    </table>
    </>
    
    )

}

export default App;
