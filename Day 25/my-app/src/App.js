import { Provider } from 'react-redux';
import BankApp from './Components/BankApp';


import bankStore from './Stores/BankStore';

bankStore.dispatch({type:"CREATE"});

 
function App() 
{ 
      return(
        <>
             <Provider store={bankStore}>
                 <BankApp  />
            </Provider>  
        
        </>
        );
}

export default App;