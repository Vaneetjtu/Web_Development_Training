import { legacy_createStore as createStore } from 'redux';

// Reducer Function
const bankReducer = (state, action) => 
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    // alert(action.type);

    switch (action.type) 
    {
        case "CREATE":
            return {balance: 0};    

        case "DEPOSIT":
            return {balance: state.balance + parseFloat(action.amount)};
            
        case "WITHDRAW":
            if(state.balance < parseFloat(action.amount))  
            {
                alert("Insufficent Fund");
                return {balance: state.balance};
            }
            else
            {
               return {balance: state.balance - parseFloat(action.amount)};
            }
        default:
            return state;
    }
};

// Create Store
const bankStore = createStore(bankReducer);
export default bankStore;