import React, { useState } from 'react';
import './BankApp.css'; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function BankApp() 
{    
    const [amount, setAmount] = useState(0);    
    let currentBalance = useSelector((state) => state.balance); 
    const dispatch = useDispatch();
 

  function deposit_click()
  {    
      dispatch({type:"DEPOSIT", amount:amount} );
      setAmount(0);   // clear textbox
  }

  function withdraw_click()
  {
     dispatch({type:"WITHDRAW", amount:amount} );
     setAmount(0);   // clear textbox
  }
 
    
        return (
        <div>
        <header>
            <img src="images/bank.png" width="150" alt="" />
            <br/>
            React-Redux Bank
        </header>
        <h1>Your balance is ${(currentBalance).toFixed(2)}</h1>
        <div className="atm">
                Enter Amount :  
                <input type="text" placeholder="Enter Ammount" value={amount}  name="amount" onChange={(e) => setAmount(e.target.value)} />
                <button onClick={withdraw_click}>Withdraw</button>
                <button onClick={deposit_click}>Deposit</button>
        </div>
        </div>
        );
}
 
export default BankApp;
    

 